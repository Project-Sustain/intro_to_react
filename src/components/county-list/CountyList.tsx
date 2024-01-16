import { List, ListItem, ListItemText, TextField, Typography } from "@mui/material"
import { StyledPaper } from "../../styled-components/StyledPaper"
import { County, UseCountyListHook } from "../../hooks/useCountyList"

interface CountyListProps {
    countyList: UseCountyListHook
}

const CountyList = ({countyList}: CountyListProps) => {

    return (
        <>
            {countyList.length > 0 && (
                <StyledPaper elevation={3} sx={{ maxHeight: '80vh', overflow: 'auto', width: '25vw' }}>
                    <Typography align='center'>Counties</Typography>
                        <TextField
                            id="standard-basic"
                            label="Search"
                            variant="standard"
                            onChange={countyList.handleSearchChange}
                            value={countyList.searchTerm}
                            sx={{ margin: '0px' }}/>                                                       
                    <List>
                        {countyList.filteredCounties?.map((county: County, index: number) => (
                            <ListItem key={index} button onClick={() => countyList.handleCountyClick(county.name)}>
                                <ListItemText primary={county.name} />
                            </ListItem>
                        ))}
                    </List>
                </StyledPaper>
                            
            )}
        </>
    )
}

export default CountyList