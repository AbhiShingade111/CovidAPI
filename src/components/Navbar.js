import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MasksIcon from '@mui/icons-material/Masks';
import { VolunteerActivismSharp } from '@mui/icons-material';

export default function SearchAppBar(props) {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                        >
                            <MasksIcon sx={{ fontSize: 30 }} />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
                        >
                            <span style={{ fontSize: "30px" }}>Go Corona Go</span>
                        </Typography>

                        <Box sx={{ flexGrow: 0 }}>
                            <VolunteerActivismSharp sx={{ fontSize: 30 }} />
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}