import React, { Component } from 'react';
import { Box, Button } from '@mui/material';
import UT from "../image/bg2.png";


export default class UTButton extends Component {
    render() {
        return (
        <Box>
            <Button href="/" style={{ backgroundColor: 'transparent' }}>
                <img src={UT}/>
            </Button>
        </Box>
        );
    }
}