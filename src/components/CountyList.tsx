import { Box, List, ListItemButton, ListItemText, TextField } from "@mui/material";
import React, { useState } from "react";
import countyData from "../library/county_data.json"

interface County {
    name: string;
    GISJOIN: string
}

interface CountyListProps {stateGISJOIN: string, openState: string}

export default function CountyList({stateGISJOIN, openState}: CountyListProps) {


    const [countySearch, setcountySearch] = useState('');
    const countiesForState = countyData.filter(county =>
        county.GISJOIN.startsWith(stateGISJOIN)
    );
    const [countyList, setCountyList] = useState<County[]>(countiesForState);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setcountySearch(e.target.value);

        if (e.target.value !== "") {
            setCountyList(countiesForState.filter(county => county.name.includes(e.target.value)))
        }
        else {
            setCountyList(countiesForState)
        }
    }

    return stateGISJOIN === openState && (
        <>
            <Box
                component="form"
                sx={{ '& > :not(style': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-basic"
                    label="Search county"
                    variant="standard"
                    value={countySearch}
                    onChange={handleChange}
                />
            </Box>
            <List component="div" disablePadding>
                {countyList.sort((a, b) => a.name >= b.name ? 1 : -1).map((county) => (
                    <ListItemButton key={county.GISJOIN} sx={{ pl: 4 }}>
                        <ListItemText primary={county.name} />
                    </ListItemButton>
                ))}
            </List>
        </>
    )
}