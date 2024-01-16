import { Stack } from "@mui/material";
import { UseDeckMap } from "../hooks/UseDeckMap";
import { UseApi } from "../hooks/UseApi";
import DeckMap from "./DeckMap";
import BarCharts from "./charts/BarChart";
import LineCharts from "./charts/LineChart";
import { StyledPaper } from "../styled-components/StyledPaper";
import StateList from "./state-list/StateList";
import useStateList from "../hooks/useStateList";
import useCountyList from "../hooks/useCountyList";
import CountyList from "./county-list/CountyList";

export type Coordinates = [number, number] // Expected coordinate input type

// Note: Generally we don't code everything into one Main component. 
// You can think as indivdual UI components as classes, but since we are working in React a <Component />.

// Note: We want to structure our code within subdirectories (e.g. ./charts/LineChart.tsx).
// This is more apparent in large application file structures. 
// We tend to follow; ./components, ./hooks, and ./styled-components (scsc).

export default function Main() {

    const Map = UseDeckMap();
    const Api = UseApi();

    UseDeckMap();

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

    const countyList = useCountyList({sendCoordinatesRequest})
    const stateList = useStateList({countyList, Map})

    return (
        <>
            <DeckMap Map={Map} />
            <Stack direction="row" spacing={2} alignItems="flex-start">
            <StateList stateList={stateList}/>
            <CountyList countyList={countyList}/>
                {countyList.length > 0 && (
            <StyledPaper elevation={3} sx={{ maxHeight: '80vh', overflow: 'auto', width: '25vw' }}>
            <LineCharts data={countyList.lineChartData} stateName={stateList.selectedState || 'State'} />
            </StyledPaper>
                )}
                {countyList.length > 0 && (
            <StyledPaper elevation={3} sx={{ maxHeight: '800vh', overflow: 'auto', width: '25vw' }}>
                <BarCharts data={countyList.barChartData} />
            </StyledPaper>
                )}
            </Stack>
        </>
    );
}