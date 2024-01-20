import React, { useState } from 'react';
import { Button, Container, Paper, Typography, TextField, Tab, Tabs } from '@mui/material';
import Register from '../components/RegisterRender';
import Login from '../components/LoginRender';

function Home() {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <Container sx={{ backgroundColor: '#DBF9D8', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} maxWidth={false}>
            <Typography color={"#3E4A3D"} fontFamily='Apple Chancery' fontSize="50px"> Huse. </Typography>
            <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column', width: '500px', height: '600px', gap: '20px', backgroundColor: "#F8FFF8" }}>
                <Tabs value={activeTab} onChange={handleTabChange} centered>
                    <Tab label="Register" />
                    <Tab label="Login" />
                </Tabs>
                {activeTab === 0 && <Register />}
                {activeTab === 1 && <Login />}
            </Paper>
        </Container>
    );
}

export default Home;
