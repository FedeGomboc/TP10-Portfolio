import React, { useEffect, useState } from 'react';
import PortfolioCard from "../../components/PortfolioCard";
import {Box, Grid} from "@mui/material";
import axios from 'axios';

export default function Portfolio() {

    const [proyectos, setProyectos] = useState([])

    useEffect(() => {        
        axios.get('proyectos.json')
        .then((response) => {
           let data = response.data
           setProyectos(data)
        })
        .catch((error) => {
            console.log(error)
        })
        },[])

    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {proyectos.map((proyecto,index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <PortfolioCard proyecto={proyecto}/>
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};