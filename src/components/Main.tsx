import { useState } from "react";
import { Stack, Typography, List } from "@mui/material";
import { UseDeckMap } from "../hooks/UseDeckMap";
import { UseApi } from "../hooks/UseApi";
import DeckMap from "./DeckMap";
import TextField from '@mui/material/TextField';
import BarCharts from "./BarChart";
import LineCharts from "./LineChart";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { StyledPaper } from "../styled-components/StyledPaper";
import StateList from "./state-list/StateList";
import useStateList from "../hooks/useStateList";

interface BarChartData {
    name: number; // Number of letters in the county name
    value: number; // Number of counties with that many letters
}

export interface County {
    name: string; 
    GISJOIN: string; 
}

export type Coordinates = [number, number] // Expected coordinate input type

const processCountyData = (counties: County[]): BarChartData[] => { // Retrives information for bar chart data
    const lengthFrequency = new Map<number, number>();

    counties.forEach(county => {
        const nameLength = county.name.length;
        lengthFrequency.set(nameLength, (lengthFrequency.get(nameLength) || 0) + 1);
    });

    return Array.from(lengthFrequency, ([name, value]) => ({ name, value }));
};


// Note: Generally we don't code everything into one Main component. 
// You can think as indivdual UI components as classes, but since we are working in React a <Component />.

// Note: We want to structure our code within subdirectories (e.g. ./charts/LineChart.tsx).
// This is more apparent in large application file structures. 
// We tend to follow; ./components, ./hooks, and ./styled-components (scsc).

export default function Main() {

    const Map = UseDeckMap();
    const Api = UseApi();

    UseDeckMap();

   
    const [countyList, setCountyList] = useState<County[]>([]); // Holds County

    const stateList = useStateList({setCountyList, Map})


    const [searchTerm, setSearchTerm] = useState(''); // Holds Search Term


    const sendCoordinatesRequest = async(countyName: string) => { // Built off the API example, this sends the API request and updates the map to the correct county
        const response = await Api.functions.sendRequest(countyName, stateList.selectedState);
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


      
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => { // This handles the search bar typing
        setSearchTerm(event.target.value);
    };
 
    const filteredCounties = searchTerm // This handles the sorting of the list when searching
    ? countyList.filter(county => county.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : countyList;


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
            <StateList stateList={stateList}/>
                {countyList.length > 0 && (
                    <StyledPaper elevation={3} sx={{ maxHeight: '80vh', overflow: 'auto', width: '25vw' }}>
                        <Typography align='center'>Counties</Typography>
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
            <LineCharts data={chartData} stateName={stateList.selectedState || 'State'} />
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