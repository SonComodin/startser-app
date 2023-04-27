import * as React from "react";
import { useState } from "react";
import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";

interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}


const products: Product[] = [
  {
    id: 1,
    name: "XboxOne Series S",
    description: "Microsoft Xbox Series S 512GB Standard color blanco",
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_986587-MLA45731831399_042021-O.webp",
  },
  {
    id: 2,
    name: "PlayStation5",
    description: "Sony PlayStation 5 825GB Standard color blanco y negro",
    imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ps5-sony-consola-1600378972.jpg?crop=1.00xw:0.880xh;0,0.0286xh&resize=1200:*",
  },
  {
    id: 3,
    name: "Nintendo Switch",
    description: "Nintendo Switch OLED 64GB Standard color blanco y negro",
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_678428-MLA47920375730_102021-O.webp",
  }
];

const Carrousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex(activeIndex === 0 ? products.length - 1 : activeIndex - 1);
  };

  const nextSlide = () => {
    setActiveIndex(activeIndex === products.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <Box sx={{ maxWidth: 450, margin: "auto" }}>
      <Card sx={{ display: "flex" }}>
        <CardMedia sx={{ width: 2250 }} image={products[activeIndex].imageUrl} title={products[activeIndex].name} />
        <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Typography variant="h5" gutterBottom>
            {products[activeIndex].name}
          </Typography>
          <Typography variant="body2">{products[activeIndex].description}</Typography>
        </CardContent>
      </Card>
      <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
        <Button onClick={prevSlide}>Anterior</Button>
        <Button onClick={nextSlide}>Siguiente</Button>
      </Box>
    </Box>
  );
};

export default Carrousel;