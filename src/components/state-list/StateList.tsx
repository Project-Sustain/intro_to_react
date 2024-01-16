import { Button, List, ListItem, ListItemText, Typography } from "@mui/material"
import { StyledPaper } from "../../styled-components/StyledPaper"
import { UseStateListHook } from "../../hooks/useStateList"
import stateData from '../../library/state_data.json'

interface StateListProps {
    stateList: UseStateListHook
}

const StateList = ({ stateList }: StateListProps) => {

    return (
        <StyledPaper elevation={3} sx={{ maxHeight: '80vh', overflow: 'auto', width: '25vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography align='center'>State List</Typography>
            <Button onClick={stateList.sendCoordinatesRequestHome} variant='outlined' sx={{ margin: '10px 0' }}>Home</Button>
            <List sx={{ width: '100%' }}>
                {stateData.map((state, index) => (
                <ListItem key={index} button onClick={() => stateList.handleStateClick(state.GISJOIN)}>
                    <ListItemText primary={state.name} />
                </ListItem>
                ))}
            </List>
            {/* TODO: red button to clear state selection stateList.clearSelection*/}
        </StyledPaper>
    )
}

export default StateList