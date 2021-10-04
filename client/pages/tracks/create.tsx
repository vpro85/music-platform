import React, {useState} from 'react';
import MainLayout from "../../layouts/MainLayout";
import StepWrapper from "../../components/StepWrapper";
import {Button, Grid, TextField} from "@material-ui/core";
import FileUpload from "../../components/FileUpload";
import {useInput} from "../../hooks/useInput";
import axios from "axios";
import {router} from "next/client";
import {useRouter} from "next/router";

const Create = () => {

    const [activeStep, setActiveStep] = useState(0)
    const [picture, setPicture] = useState(null)
    const [audio, setAudio] = useState(null)
    const name = useInput('')
    const artist = useInput('')
    const text = useInput('')
    const router = useRouter()


    const next = () => {
        if (activeStep !== 2) {
            setActiveStep(prev => prev + 1)
        } else {
            const formData = new FormData()
            formData.append('name', name.value)
            formData.append('artist', artist.value)
            formData.append('text', text.value)
            formData.append('picture', picture)
            formData.append('audio', audio)
            axios.post('http://192.168.1.66:5000/tracks', formData)
                .then(resp => router.push('/tracks'))
                .catch(e => console.log(e))
        }
    }

    const back = () => {
        setActiveStep(prev => prev - 1)
    }

    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 &&
                <Grid container direction={"column"} style={{padding: 20}}>
                    <TextField {...name} label={"Track name"} style={{margin: 5}}/>
                    <TextField {...artist} label={"Artist name"} style={{margin: 5}}/>
                    <TextField {...text} label={"Lyrics"} style={{margin: 5}} multiline rows={4}/>

                </Grid>

                }
                {activeStep === 1 &&
                <FileUpload setFile={setPicture} accept={"image/*"}>
                    <Button>Upload track picture</Button>
                </FileUpload>
                }
                {activeStep === 2 &&
                <FileUpload setFile={setAudio} accept={"audio/*"}>
                    <Button>Upload track</Button>
                </FileUpload>
                }

            </StepWrapper>
            <Grid container justifyContent={"space-between"}>
                <Button disabled={activeStep === 0} onClick={() => back()}>Back</Button>
                <Button onClick={() => next()}>Next</Button>
            </Grid>
        </MainLayout>
    );
};

export default Create;