import React, { ReactElement, FC } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const About: FC<any> = (): ReactElement => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: '#ffffff',
        padding: "20px",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <img src="Valelinda2.png" alt="VL" style={{ width: "55%" }} />

      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: '#B3FCAD',
          margin: '20px auto',
          padding: "20px",
          width: "100%",
          height: "auto",
          textAlign: "center"
        }}
      >
        <Typography variant="body1" fontSize="20px">
          ¿QUIENES SOMOS?
        </Typography>
        <Typography variant="body1" fontSize="18px">
          PC Factory es una empresa chilena, que comenzó sus operaciones en septiembre del año 1996,
          transformándose durante este tiempo, en la mayor cadena de tiendas especialista en tecnología del país.
          Empezamos nuestra historia enfocados en el rubro de las computadoras de escritorio, pero crecimos sin parar hasta lograr un mix inigualable de productos tecnológicos, tanto para personas como para pequeñas y medianas empresas.
          Tenemos –además de todo lo relacionado al rubro de la computación– opciones en telefonía, impresión, fotografía, audio, seguridad, domótica y entretenimiento (juegos, consolas y televisores).
        </Typography>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: '#B3FCAD',
          margin: '20px auto',
          padding: "20px",
          width: "100%",
          height: "auto",
          textAlign: "center"
        }}
      >
        <Typography variant="body1" fontSize="14px">
          Atención Clientes +56 2 2560 0000
        </Typography>
        <Typography variant="body1" fontSize="14px">
          Ventas +56 2 2560 0040
        </Typography>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: '#B3FCAD',
          margin: '20px auto',
          padding: "20px",
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <a href="https://www.crunchyroll.com/es/series/GEXH3WKK0/vinland-saga">
          <FaTwitter size={24} />
        </a>
        <a href="https://www.crunchyroll.com/es/series/GEXH3WKK0/vinland-saga">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.crunchyroll.com/es/series/GEXH3WKK0/vinland-saga">
          <FaFacebook size={24} />
        </a>
      </Box>
    </Box>
  );
}

export default About;