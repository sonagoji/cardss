import { Button, Card, CardActions, CardContent, CardMedia, Typography, Grid,createTheme } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./Card2.css";
import { blue } from '@mui/material/colors';

const Card1 = () => {
    const [output, setOutput] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                console.log(response.data);
                setOutput(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Grid container spacing={4} justifyContent="center">
            {output.map((val, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                    <Card sx={{ 
                        maxWidth: 345, 
                        margin: 'auto', 
                        border: '2px solid #000' ,
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        transition: '0.3s',
                        '&:hover': {
                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.8)'
                            
                        }
                    }}>
                        <CardMedia
                            component="img"
                            sx={{ 
                                height: 200,
                                objectFit: 'contain',
                                padding: '16px',
                                backgroundColor:blue,
                                
                            }}
                            image={val.image}
                            title={val.title}
                        />
                        <CardContent style={{ textAlign: 'center' }}>
                            <Typography 
                                gutterBottom 
                                variant="h5" 
                                component="div"
                                sx={{ fontFamily: 'Roboto, sans-serif' }}
                            >
                                {val.title}
                            </Typography>
                            <Typography 
                                variant="body2" 
                                color="text.secondary"
                                sx={{ fontFamily: 'Roboto, sans-serif' }}
                            >
                                ${val.price}
                            </Typography>
                        </CardContent>
                        <CardActions style={{ justifyContent: 'center' }}>
                            <Button size="small" color="primary">Share</Button>
                            <Button size="small" color="primary">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Card1;