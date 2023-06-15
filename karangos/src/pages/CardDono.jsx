import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

// Definição do componente principal
export default function ImgMediaCard() {

  // Estado para controlar os likes
  const [likes, setLikes] = useState(() => localStorage.getItem('likes') || 0);

  // Efeito colateral para armazenar os likes no localStorage quando o estado é atualizado
  useEffect(() => {
    localStorage.setItem('likes', likes);
  }, [likes]);

  // Função para incrementar os likes
  const incrementLikes = () => {
    setLikes((prevLikes) => parseInt(prevLikes) + 1);
  };

  // Renderização do componente
  return (
    <>
      <Typography variant="h1" sx={{ mb: '20px' }}>
        Sobre o autor
      </Typography>
      <Card sx={{ maxWidth: 350 }}>
        <CardMedia
          component="img"
          alt="Logotipo Karangos"
          height="300"
          image="../../src/assets/Myphoto.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"> {/* Titulo/Nome do texto */}
            Pedro H. Oliveira
          </Typography>
          <Typography variant="body2" color="text.secondary"> {/* Corpo do texto */}
            Um cara legal, que está cursando ADS - Análise e Desenvolvimento de Software na Fatec de Franca-SP, Brasil <br/>
            Gosto de gatos e cachorros<br/>
            Tenho uma paixão pelo mundo GAMER
          </Typography>
        </CardContent>
        <CardActions>
          <Button startIcon={<ThumbUpAltIcon />} size="small" onClick={incrementLikes}>
            Like ({likes})
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
