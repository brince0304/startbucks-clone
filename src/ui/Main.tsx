import {Box, Container} from "@mui/material";
import {MainVisual} from "../component/Main/MainVisual";
import {FloatingBadge} from "./FloatingBadge";

export const Main = () => {
    return (
        <Box component={"div"} sx={{paddingTop:'120px'}} >
            <MainVisual/>
            <FloatingBadge/>
        </Box>
    );
};