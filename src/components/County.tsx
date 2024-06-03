import React from "react";
import { Paper, Typography, styled, TextField, Grid, Button } from "@mui/material";

interface CountyProps {
    countyList: { name: string; GISJOIN: string }[];
    filteredCountyList: { name: string; GISJOIN: string }[];
    searchTerm: string;
    handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleCountyClick: (countyName: string, stateName: string) => void;
    clearSelection: () => void;
}

const CountyComponent: React.FC<CountyProps> = ({
    countyList,
    filteredCountyList,
    searchTerm,
    handleSearchChange,
    handleCountyClick,
    clearSelection,
}) => (
    <Grid container spacing={2} alignItems="flex-start">
        <Grid item xs={3}>
            <StyledPaper elevation={3}>
                <Grid container spacing={1} alignItems="center">
                    <Grid item xs={12}>
                        <TextField
                            label="Search Counties"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            variant='outlined'
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={clearSelection} variant="outlined">Clear Selection</Button>
                    </Grid>
                    <Typography align="center">Counties</Typography>
                    <ul>
                        {filteredCountyList.map((county) => (
                            <li key={county.GISJOIN} onClick={() => handleCountyClick(county.name, county.GISJOIN)}>
                                {county.name}
                            </li>
                        ))}
                    </ul>
                </Grid>
            </StyledPaper>
        </Grid>
    </Grid>
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

export default CountyComponent;
