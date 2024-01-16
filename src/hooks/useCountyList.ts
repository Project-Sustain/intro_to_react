import { Dispatch, SetStateAction, useState } from "react";

export interface County {name: string; GISJOIN: string;}

interface BarChartData {name: number; value: number;}

interface LineChartData {name: string; value: number;}

interface UseCountyListHookProps {
    sendCoordinatesRequest: (countyName: string) => Promise<void>
}

export interface UseCountyListHook {
    length: number
    setCountyList: Dispatch<SetStateAction<County[]>>
    filteredCounties: County[] | undefined
    searchTerm: string
    handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    lineChartData: LineChartData[]
    barChartData:  BarChartData[]
    handleCountyClick: (countyName: string) => void
}

interface HookContext {
    searchTerm: string
    setSearchTerm: Dispatch<SetStateAction<string>>
    countyList: County[]
}

// Note: This is an example of a custom hook.
// These custom hooks contain the state and logic of a coompenent.
// This is called the container in a container/presentation pattern.
// StateList being the component, makes it the presenter.

const useCountyList = ({sendCoordinatesRequest}: UseCountyListHookProps): UseCountyListHook => {

    // Note: This section contains state.
    const [countyList, setCountyList] = useState<County[]>([]); // Holds County
    const [searchTerm, setSearchTerm] = useState<string>(''); // Holds Search Term

    const context = {
        searchTerm,
        setSearchTerm,
        countyList
    }

    return {
        length: countyList.length,
        setCountyList,
        filteredCounties: filteredCounties(searchTerm, context),
        searchTerm,
        handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value),
        lineChartData: countyList.map(county => ({name: county.name, value: county.name.length})),
        barChartData: processCountyData(countyList),
        handleCountyClick: (countyName: string) => sendCoordinatesRequest(countyName)
    }
}

export default useCountyList

// Note: Here we place the functions of the hook.

const filteredCounties = (searchTerm: string, context: HookContext) => {
    const {countyList} = context
    if(searchTerm) countyList.filter(county => county.name.toLowerCase().includes(searchTerm.toLowerCase()))
    else return countyList
}

const processCountyData = (counties: County[]): BarChartData[] => { // Retrives information for bar chart data
    const lengthFrequency = new Map<number, number>();

    counties.forEach(county => {
        const nameLength = county.name.length;
        lengthFrequency.set(nameLength, (lengthFrequency.get(nameLength) || 0) + 1);
    });

    return Array.from(lengthFrequency, ([name, value]) => ({ name, value }));
};