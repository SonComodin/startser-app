import React, {ReactElement, FC} from "react";
import { Box, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';


const Product: FC<any> = (): ReactElement => {
    return (
<Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: "100%",
          height: '90%',
          justifyContent:'center',
        alingItems:'center',
        margin:1,
        padding:"0%",
        border: 1,
        },
      }}
    > <Card sx={{ maxWidth: 280 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="XBOX.jpg"
        alt="XboxOne Series S"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        XboxOne Series S
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Aprovecha al máximo cada minuto de juego con Quick Resume, tiempos de carga ultrarrápidos y jugabilidad de hasta 120 FPS, disfruta de cientos de juegos de alta calidad, como Minecraft, Forza Horizon 5 y Halo Infinite, con amigos en la consola, PC y en la nube.
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
      Comprar
      </Button>
    </CardActions>
  </Card>
  <Card sx={{ maxWidth: 280 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="PLAY.jpg"
        alt="PlayStation 5"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        PlayStation 5
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Experimenta una velocidad sorprendente con una SSD de velocidad ultrarrápida, una inmersión más profunda con soporte para respuesta háptica, gatillos adaptativos y audio 3D, además de una generación completamente nueva de juegos de PlayStation®.

        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
      Comprar
      </Button>
    </CardActions>
  </Card>
  <Card sx={{ maxWidth: 280 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="NINTENDO.jpg"
        alt="NINTENDO S"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Nintendo Switch
        </Typography>
        <Typography variant="body2" color="text.secondary">
        la consola Nintendo Switch modelo OLED incluye un soporte ajustable y amplio para encontrar el ángulo de vista perfecto, 64 GB de almacenamiento interno y audio mejorado al usar los altavoces de la consola en los modos portátil y semiportátil.
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
      Comprar
      </Button>
    </CardActions>
  </Card>
      
    </Box>
    );
    }

export default Product;