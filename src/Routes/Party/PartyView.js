import React from 'react';
import { useState } from 'react';
import { Box, Grid, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import PartyEBackgroundImage from '../../Components/PartyComponets/PartyBackgroundImage';
import PartyTilte from '../../Components/PartyComponets/PartyTilte';
import PartyExplain from '../../Components/PartyComponets/PartyExplain';
import PartyTerms from '../../Components/PartyComponets/PartyTerms';
import PartyQusetionList from '../../Components/PartyComponets/PartyQusetionList';
import PartyQusetionWrite from '../../Components/PartyComponets/PartyQusetionWrite';
import PartyReviewList from '../../Components/PartyComponets/PartyReviewList';
import PartyReviewWrite from '../../Components/PartyComponets/PartyReviewWrite';


const PartyView = () => {

    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => { setValue(newValue); };

    return (
        <>
            <PartyEBackgroundImage />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={1} lg={1} />
                    <Grid item xs={10} lg={10}>
                        <Grid xs={12} lg={12}>
                            <PartyTilte />
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                                        <Tab label="모임 상세 설명" value="1" />
                                        <Tab label="모임 약관" value="2" />
                                        <Tab label="모임 문의" value="3" />
                                        <Tab label="모임 후기" value="4" />
                                        <Tab label="모임 후기 작성" value="5" />
                                    </TabList>
                                </Box>
                                <TabPanel value="1">
                                    <PartyExplain />
                                </TabPanel>
                                <TabPanel value="2">
                                    <PartyTerms />
                                </TabPanel>
                                <TabPanel value="3">
                                    <PartyQusetionWrite />
                                    <PartyQusetionList />
                                </TabPanel>
                                <TabPanel value="4">
                                    <PartyReviewList setValue={setValue} />
                                </TabPanel>
                                <TabPanel value="5">
                                    <PartyReviewWrite />
                                </TabPanel>
                            </TabContext>
                        </Grid>
                    </Grid>
                    <Grid item xs={1} lg={1} />
                </Grid>
            </Box >
        </>
    );
};

export default PartyView