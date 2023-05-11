import React from 'react';
import { Typography, Box } from '@mui/material';
import image from '../assets/vintage-cars.png'

export default function Homepage(){
    return(
        <>
        <Typography variant='h1' sx={{
            mb: '50px' //marginbutton
        }}>
            Bem Vindo a loja Karangos!
        </Typography>
        <Box sx={{
            textAlign: 'center',
            '& img':{
                maxwidth: '800px',
                Width: '80%'
            }
        }}>
            <img src={image} alt='Carros'/>
        </Box>
        </>
    )
}