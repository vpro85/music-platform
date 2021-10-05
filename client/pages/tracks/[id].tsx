import React, {useState} from 'react';
import {ITrack} from "../../types/tracks";
import MainLayout from "../../layouts/MainLayout";
import {Button, Grid, TextField} from "@material-ui/core";
import {useRouter} from "next/router";
import {GetServerSideProps} from "next";
import axios from "axios";
import {useInput} from "../../hooks/useInput";

const TrackPage = ({serverTrack}) => {
    const [track, setTrack] = useState<ITrack>(serverTrack)
    const router = useRouter()

    const username = useInput('')
    const text = useInput('')
    const addComment = async () => {
        try {
            const response = await axios.post('http://192.168.1.66:5000/tracks/comment', {
                username: username.value,
                text: text.value,
                trackId: track._id
            })
            setTrack({...track, comments: [...track.comments, response.data]})
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <MainLayout title={`${track.name} by ${track.artist} @ Music Platform` } keywords={`${track.name}, ${track.artist}, music, artist`}>
            <Button
                variant={"outlined"}
                style={{fontSize: 32}}
                onClick={() => router.push('/tracks')}>
                To track list
            </Button>
            <Grid container style={{margin: '20px 0'}}>
                <img src={'http://192.168.1.66:5000/' + track.picture} alt={track.name} width={200} height={200}/>
                <div style={{marginLeft: 30}}>
                    <h1>Title: {track.name}</h1>
                    <h1>Artist: {track.artist}</h1>
                    <h1>Listens: {track.listens}</h1>
                </div>
            </Grid>
            <h1>Lyrics:</h1>
            <p>{track.text}</p>
            <h1>Comments: </h1>
            <Grid container>
                <TextField label={"Your name..."} fullWidth {...username}/>
                <TextField label={"Your comment..."} fullWidth multiline rows={4} {...text}/>
                <Button variant={"outlined"} onClick={addComment}>Post</Button>
            </Grid>
            <div>{track.comments.map(comment =>
                <div key={comment._id}>
                    <hr/>
                    <div>Name: {comment.username}</div>
                    <div>Comment: {comment.text}</div>
                </div>
            )}</div>
        </MainLayout>
    );
};

export default TrackPage;
export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const response = await axios.get('http://192.168.1.66:5000/tracks/' + params.id)
    return {
        props: {
            serverTrack: response.data
        }
    }
}