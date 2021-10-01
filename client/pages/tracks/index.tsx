import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Box, Button, Card, Grid} from "@material-ui/core";
import {useRouter} from "next/router";
import {ITrack} from "../../types/tracks";
import TrackList from "../../components/TrackList";
import {useActions} from "../../hooks/useActions";

const Index = () => {
    const router = useRouter()
    const tracks: ITrack[] = [
        {_id: '1', artist: 'IF', text: 'Something to sing...', name:'Track 1', comments:[], listens:0, audio:'http://192.168.1.13:5000/audio/5a84022e-d330-4447-815a-ac2710b71fc9.mp3', picture:'http://192.168.1.13:5000/image/e3be65d1-31a6-4586-980b-966bcc019336.jpg'},
        {_id: '2', artist: 'IF', text: 'Something to sing...', name:'Track 2', comments:[], listens:5, audio:'http://192.168.1.13:5000/audio/5a84022e-d330-4447-815a-ac2710b71fc9.mp3', picture:'http://192.168.1.13:5000/image/e3be65d1-31a6-4586-980b-966bcc019336.jpg'},
        {_id: '3', artist: 'IF', text: 'Something to sing...', name:'Track 3', comments:[], listens:7, audio:'http://192.168.1.13:5000/audio/5a84022e-d330-4447-815a-ac2710b71fc9.mp3', picture:'http://192.168.1.13:5000/image/e3be65d1-31a6-4586-980b-966bcc019336.jpg'},
    ]
    return (
        <MainLayout>
            <Grid container justifyContent={"center"}>
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent='space-between'>
                            <h1>Track list</h1>
                            <Button onClick={()=>router.push('/tracks/create')}>
                                Load
                            </Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks}/>
                </Card>
            </Grid>

        </MainLayout>
    );
};

export default Index;