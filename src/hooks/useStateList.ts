import { Dispatch, SetStateAction, useEffect, useState } from "react";
import stateData from '../library/state_data.json';
import countyData from '../library/county_data.json';
import { Coordinates, County } from "../components/Main";
import { DeckMapHook } from "./UseDeckMap";

export interface UseStateListHookProps {
    setCountyList: Dispatch<SetStateAction<County[]>>
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
    setCountyList: Dispatch<SetStateAction<County[]>>
    Map: DeckMapHook
}

// Note: This is an example of a custom hook.
// These custom hooks contain the state and logic of a coompenent.
// This is called the container in a container/presentation pattern.
// StateList being the component, makes it the presenter.

const useStateList = ({setCountyList, Map}: UseStateListHookProps): UseStateListHook => {

    // Note: This section contains state.

    const [selectedState, setSelectedState] = useState(stateData[0].name); // Holds State

    useEffect(() => {
        setSelectedState(stateData[0].name);
    }, [selectedState]);

    const context = {
        selectedState,
        setSelectedState,
        setCountyList,
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
    const {setSelectedState, setCountyList} = context
    setSelectedState(stateGISJOIN);
    const stateGISJOINPrefix = stateGISJOIN.substring(0, 4);
    const filteredCounties = countyData.filter(county => county.GISJOIN.startsWith(stateGISJOINPrefix));
    setCountyList(filteredCounties);
};

const sendCoordinatesRequestHome = async(context: HookContext) => {  
    const {Map} = context
    const coordinates: Coordinates = [-98.5795, 39.8283]; // This is the hard coded value for the zoomed out map
    Map.functions.updateMapViewStateHome(coordinates);
};

const clearSelection = (context: HookContext) => {
    const {setSelectedState, setCountyList} = context
    setSelectedState('');
    setCountyList([]);
};
