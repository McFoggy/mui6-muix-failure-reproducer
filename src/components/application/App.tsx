import {FC} from "react";
import {Box, Typography} from "@mui/material";
import {StyledAppIcon} from "./AppIcon";
import {AppProps} from "./App.types";

const App: FC<AppProps> = ({name}) => {
    return (
        <Box>
            <Typography>{name}</Typography>
            <StyledAppIcon></StyledAppIcon>
        </Box>
    )
}

export default App