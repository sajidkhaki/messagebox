
import * as React from 'react';
import Box from '@mui/material/Box';
import Search from "./search";
import Cards from "./cards"
const Main = (props) => {




    return (
        <>
            <Box>
                <Search data = {props.data}   />
                <Cards data={props.data} updateState={props.updateState} />
            </Box>
        </>
    );
}

export default Main;
