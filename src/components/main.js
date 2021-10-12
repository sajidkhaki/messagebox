
import * as React from 'react';
import Box from '@mui/material/Box';
import Header from "./header";
const Main = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: 300,
                bgcolor: 'primary.dark',
                '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                },
            }}
        >
            <Header />
            
        </Box>
    );
}

export default Main;
