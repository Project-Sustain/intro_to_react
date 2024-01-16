import { useState, useEffect } from "react";
import { Stack, Typography, List } from "@mui/material";
import { UseDeckMap } from "../hooks/UseDeckMap";
import { UseApi } from "../hooks/UseApi";
import DeckMap from "./DeckMap";
import { Button } from "@mui/material";
import stateData from '../library/state_data.json';
import countyData from '../library/county_data.json';
import TextField from '@mui/material/TextField';
import BarCharts from "./BarChart";
import LineCharts from "./LineChart";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { StyledPaper } from "../styled-components/StyledPaper";

interface MainProps {
    title: string
}

interface BarChartData {
    name: number; // Number of letters in the county name
    value: number; // Number of counties with that many letters
}

interface County {
    name: string; 
    GISJOIN: string; 
}

const processCountyData = (counties: County[]): BarChartData[] => { // Retrives information for bar chart data
    const lengthFrequency = new Map<number, number>();

    counties.forEach(county => {
        const nameLength = county.name.length;
        lengthFrequency.set(nameLength, (lengthFrequency.get(nameLength) || 0) + 1);
    });

    return Array.from(lengthFrequency, ([name, value]) => ({ name, value }));
};

export default function Main({ title }: MainProps) {

    const Map = UseDeckMap();
    const Api = UseApi();
    UseDeckMap();

    const [selectedState, setSelectedState] = useState(stateData[0].name); // Holds State
    const [countyList, setCountyList] = useState<County[]>([]); // Holds County

    const [searchTerm, setSearchTerm] = useState(''); // Holds Search Term

    useEffect(() => {
        setSelectedState(stateData[0].name);
    }, [selectedState]);

    const clearSelection = () => {
        setSelectedState('');
        setCountyList([]);
    };

    type Coordinates = [number, number] // Expected coordinate input type

    const sendCoordinatesRequest = async(countyName: string) => { // Built off the API example, this sends the API request and updates the map to the correct county
        const response = await Api.functions.sendRequest(countyName, selectedState);
        if (response && response.results && response.results.length > 0) {
            const firstResult = response.results[0];
            if (firstResult.geometry && firstResult.geometry.lat !== undefined && firstResult.geometry.lng !== undefined) {
                const coordinates: Coordinates = [firstResult.geometry.lng, firstResult.geometry.lat];
    
                Map.functions.updateMapViewState(coordinates);
            } else {
                console.log('Error: Lat and/or Long not found in response');
            }
        } else {
            console.log('Error sending API request or no results found');
        }
    };

    const sendCoordinatesRequestHome = async() => {  
                const coordinates: Coordinates = [-98.5795, 39.8283]; // This is the hard coded value for the zoomed out map
                Map.functions.updateMapViewStateHome(coordinates);
    };
      
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => { // This handles the search bar typing
        setSearchTerm(event.target.value);
    };
 
    const filteredCounties = searchTerm // This handles the sorting of the list when searching
    ? countyList.filter(county => county.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : countyList;

    const handleStateClick = (stateGISJOIN: string) => {  // This uses the GISJOIN value in the JSON file to map the correct state and counties
            setSelectedState(stateGISJOIN);
            const stateGISJOINPrefix = stateGISJOIN.substring(0, 4);
            const filteredCounties = countyData.filter(county => county.GISJOIN.startsWith(stateGISJOINPrefix));
            setCountyList(filteredCounties);
    };

    const handleCountyClick = (countyName: string) => { // Sends the coordinate request when clicking a county
        sendCoordinatesRequest(countyName);
    };

    const chartData = countyList.map(county => ({ // Sets the data for the chart data
        name: county.name,
        value: county.name.length
    }));
    

    const barChartData = processCountyData(countyList);


    
    return (
        <>
            <DeckMap Map={Map} />
            <Stack direction="row" spacing={2} alignItems="flex-start">
            <StyledPaper elevation={3} sx={{ maxHeight: '80vh', overflow: 'auto', width: '25vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography align='center'>{title}</Typography>
                <Button onClick={sendCoordinatesRequestHome} variant='outlined' sx={{ margin: '10px 0' }}>Home</Button>
                <List sx={{ width: '100%' }}>
                        {stateData.map((state, index) => (
                    <ListItem key={index} button onClick={() => handleStateClick(state.GISJOIN)}>
                        <ListItemText primary={state.name} />
                    </ListItem>
                     ))}
                </List>
            </StyledPaper>
                {countyList.length > 0 && (
                    <StyledPaper elevation={3} sx={{ maxHeight: '80vh', overflow: 'auto', width: '25vw' }}>
                        <Typography align='center'>Counties</Typography>
                        <Button onClick={clearSelection} variant='outlined' sx={{ margin: '10px' }}>
                            Exit
                        </Button>
                            <TextField
                                id="standard-basic"
                                label="Search"
                                variant="standard"
                                onChange={handleSearchChange}
                                value={searchTerm}
                                sx={{ margin: '0px' }}/>                                                       
                        <List>
                            {filteredCounties.map((county, index) => (
                                <ListItem key={index} button onClick={() => handleCountyClick(county.name)}>
                                    <ListItemText primary={county.name} />
                                </ListItem>
                            ))}
                        </List>
                    </StyledPaper>
                                
                )}
                {countyList.length > 0 && (
            <StyledPaper elevation={3} sx={{ maxHeight: '80vh', overflow: 'auto', width: '25vw' }}>
            <LineCharts data={chartData} stateName={selectedState || 'State'} />
            </StyledPaper>
                )}
                {countyList.length > 0 && (
            <StyledPaper elevation={3} sx={{ maxHeight: '800vh', overflow: 'auto', width: '25vw' }}>
                <BarCharts data={barChartData} />
            </StyledPaper>
                )}
            </Stack>
        </>
    );
}