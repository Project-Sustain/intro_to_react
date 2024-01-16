import { Dispatch, SetStateAction, useEffect, useState } from "react";
import stateData from '../library/state_data.json';
import countyData from '../library/county_data.json';
import { Coordinates } from "../components/Main";
import { DeckMapHook } from "./UseDeckMap";
import { UseCountyListHook } from "./useCountyList";

export interface UseStateListHookProps {
    countyList: UseCountyListHook
    Map: DeckMapHook
}

export interface UseStateListHook {
    selectedState: string
    handleStateClick: (stateGISJOIN: string) => void
    sendCoordinatesRequestHome: () => void
    clearSelection: () => void
}

interface HookContext {
    selectedState: string
    setSelectedState: Dispatch<SetStateAction<string>>
    countyList: UseCountyListHook
    Map: DeckMapHook
}

// Note: This is an example of a custom hook.
// These custom hooks contain the state and logic of a coompenent.
// This is called the container in a container/presentation pattern.
// StateList being the component, makes it the presenter.

const useStateList = ({countyList, Map}: UseStateListHookProps): UseStateListHook => {

    // Note: This section contains state.

    const [selectedState, setSelectedState] = useState(stateData[0].name); // Holds State

    useEffect(() => {
        setSelectedState(stateData[0].name); // TODO Is this good?
    }, [selectedState]);

    const context = {
        selectedState,
        setSelectedState,
        countyList,
        Map
    }

    return {
        selectedState,
        handleStateClick: (stateGISJOIN: string) => handleStateClick(stateGISJOIN, context),
        sendCoordinatesRequestHome: () => sendCoordinatesRequestHome(context),
        clearSelection: () => clearSelection(context)
    }
}

export default useStateList

// Note: Here we place the functions of the hook.

const handleStateClick = (stateGISJOIN: string, context: HookContext) => {  // This uses the GISJOIN value in the JSON file to map the correct state and counties
    const {setSelectedState, countyList} = context
    setSelectedState(stateGISJOIN);
    const stateGISJOINPrefix = stateGISJOIN.substring(0, 4);
    const filteredCounties = countyData.filter(county => county.GISJOIN.startsWith(stateGISJOINPrefix));
    countyList.setCountyList(filteredCounties);
};

const sendCoordinatesRequestHome = async(context: HookContext) => {  
    const {Map} = context
    const coordinates: Coordinates = [-98.5795, 39.8283]; // This is the hard coded value for the zoomed out map
    Map.functions.updateMapViewStateHome(coordinates);
};

const clearSelection = (context: HookContext) => {
    const {setSelectedState, countyList} = context
    setSelectedState('');
    countyList.setCountyList([]);
};
