import React, {ReactElement, FC} from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const About: FC<any> = (): ReactElement => {

    return (
      <Box sx= {{
        flexGrow: 1,
        backgroundColor: '#white',
        display:'list',
        justifyContent:'center',
        alingItems:'center',
        margin:0,
        padding:"0%",
        border: 0,
        height: "auto"
        }}><div style={{ textAlign: "center", height: "auto" }}>
            <img src="Valelinda2.png" alt="VL" width="50%"></img>
        </div>
            <Box sx={{
                flexGrow: 1,
                backgroundColor: '#B3FCAD',
                display: 'list',
                margin: '1px auto',
                padding:"0%",
                border: 0,
                
                  width: "100%",
                  height: "auto",
                }}>

                    <Typography marginTop="5px" variant="body1" fontSize="20px">
                    ¿QUIENES SOMOS?
                    </Typography>
                    <Typography marginTop="5px" variant="body1" fontSize="18px">
                    PC Factory es una empresa chilena, que comenzó sus operaciones en septiembre del año 1996,

transformándose durante este tiempo, en la mayor cadena de tiendas especialista en tecnología del país.

Empezamos nuestra historia enfocados en el rubro de las computadores de escritorio, pero crecimos sin parar hasta lograr un mix inigualable de productos tecnológicos, tanto para personas como para pequeñas y medianas empresas.

Tenemos –además de todo lo relacionado al rubro de la computación– opciones en telefonía, impresión, fotografía, audio, seguridad, domótica y entretenimiento (juegos, consolas y televisores).
</Typography>


                    
     
          
                    
                </Box>
                
                <Box sx={{
                flexGrow: 1,
                backgroundColor: '#B3FCAD',
                display: 'list',
                margin: '0px auto',
                padding:"1%",
                border: 0,
                
                
                  width: "auto",
                  height: "14%",
                }}>
                  <Typography marginTop="8px" variant="body1" fontSize="14px">
            
            Atención Clientes +56 2 2560 0000
            
                      </Typography>
                      <Typography marginTop="8px" variant="body1" fontSize="14px">
                      Ventas +56 2 2560 0040
                      </Typography>
                      

                </Box>
                <Box sx={{
                flexGrow: 1,
                backgroundColor: '#B3FCAD',
                display: 'flex',
                margin: '0px auto',
                padding:"0%",
                border: 0,
                justifyContent:'center',
        alingItems:'center',
                
                
                  width: "auto",
                  height: "auto",
                }}>
                  <div>
        <a href="https://twitter.com/PCFactoryCL">
          <FaTwitter size={24}  /></a>
          <a href="https://www.instagram.com/pcfactorycl/?hl=es-la">
          <FaInstagram size={24} /></a>
          <a href="https://www.facebook.com/PCFactoryCL/?locale=es_LA">
          <FaFacebook size={24} /></a>
        

      </div>


                  

                </Box>
    </Box>
     )
    }

export default About;