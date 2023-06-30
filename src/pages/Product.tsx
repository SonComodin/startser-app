import React, { ReactElement, FC, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActionArea,
  CardActions,
  InputBase,
  IconButton,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";


const Product: FC<any> = (): ReactElement => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    
    <Box
      sx={{
        flexGrow: 1,
        display: "contents",
        flexDirection: "column",
        alignItems: "center",
        
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
        <IconButton sx={{ marginRight: 1 }}>
          <SearchIcon />
        </IconButton>
        <InputBase
          placeholder="Buscar productos..."
          inputProps={{ "aria-label": "buscar productos" }}
          value={searchText}
          onChange={handleSearch}
        />
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gridGap: "1rem",
          width: "100%",
          maxWidth: "1300px",
        }}
      >
        {filteredProducts.map((product: any) => (
          <Card key={product.id}>
            <CardActionArea>
              <CardMedia component="img" height="125" image={product.image} alt={product.name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Comprar
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

const products = [
  {
    id: 1,
    name: "XboxOne Series S",
    description:
      "Aprovecha al máximo cada minuto de juego con Quick Resume, tiempos de carga ultrarrápidos y jugabilidad de hasta 120 FPS, disfruta de cientos de juegos de alta calidad, como Minecraft, Forza Horizon 5 y Halo Infinite, con amigos en la consola, PC y en la nube.",
    image: "XBOX.jpg",
  },
  {
    id: 2,
    name: "PlayStation 5",
    description:
      "Experimenta una velocidad sorprendente con una SSD de velocidad ultrarrápida, una inmersión más profunda con soporte para respuesta háptica, gatillos adaptativos y audio 3D, además de una generación completamente nueva de juegos de PlayStation®.",
    image: "PLAY.jpg",
  },
  {
    id: 3,
    name: "Nintendo Switch",
    description:
      "La consola Nintendo Switch modelo OLED incluye un soporte ajustable y amplio para encontrar el ángulo de vista perfecto, 64 GB de almacenamiento interno y audio mejorado al usar los altavoces de la consola en los modos portátil y semiportátil.",
    image: "NINTENDO.jpg",
  },
  {
    id: 4,
    name: "XboxOne Series X",
    description:
      "Juega miles de títulos de cuatro generaciones de consolas: todos los juegos se ven mejor y se juegan mejor en Xbox Series X. Combina una unidad SSD personalizada y software integrado para disminuir significativamente los tiempos de carga dentro y fuera del juego.",
    image: "seriesX.png",
  },
];

export default Product;