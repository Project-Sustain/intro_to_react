import { Paper, styled } from "@mui/material";

// Note: We can store a libary of styled components for like a CSS. (Improves code cleanliness and reusablility).

export const StyledPaper = styled(Paper)({
    width: '25vw',
    margin: '10px',
    padding: '10px',
    zIndex: 5000,
    opacity: 0.8
})