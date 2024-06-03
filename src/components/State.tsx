import React from "react";
import { Paper, Typography, styled } from "@mui/material";

interface StateProps {
    states: { name: string; GISJOIN: string }[];
    handleStateClick: (stateGISJOIN: string) => void;
}

const StateComponent: React.FC<StateProps> = ({ states, handleStateClick }) => (
    <StyledPaper elevation={3}>
        <Typography align="center">States</Typography>
        <ul>
            {states.map((state) => (
                <li key={state.GISJOIN} onClick={() => handleStateClick(state.GISJOIN)}>
                    {state.name}
                </li>
            ))}
        </ul>
    </StyledPaper>
);

const StyledPaper = styled(Paper)({
    width: '25vw',
    margin: '10px',
    padding: '10px',
    zIndex: 5000,
    opacity: 0.8,
    '& ul': {
        listStyle: 'none', 
        padding: 0,
    },
    '& ul li': {
        cursor: 'pointer',
    },
});

export default StateComponent;
