import { List, ListItemButton, ListItemText } from "@mui/material";
import React, { useState } from "react";
import statesData from "../library/state_data.json"
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import CountyList from "./CountyList";

export default function StateList() {
    const [openState, setOpenState] = useState<string>("");

    const handleToggle = (gisjoin: string) => {
        setOpenState((prev) => (prev === gisjoin ? "" : gisjoin));
    };

    return (
        <List sx={{ width: '50%', maxWidth: 180, bgcolor: 'background.paper' }}>
            {statesData.sort((a, b) => a.name >= b.name ? 1 : -1).map(state => (
                <React.Fragment key={state.GISJOIN}>
                    <ListItemButton
                        onClick={() => {
                            handleToggle(state.GISJOIN);
                        }}
                    >
                        <ListItemText primary={state.name} />
                        {openState === state.GISJOIN ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <CountyList stateGISJOIN={state.GISJOIN} openState={openState} />
                </React.Fragment>
            ))}
        </List>
    )
}