import React, {ReactElement, FC} from "react";
import { useState } from "react";
import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Carrousel from "../Components/Carrusel";







const Home: FC<any> = (): ReactElement => {
    return (
        <Box sx= {{
        flexGrow: 1,
            backgroundColor: '#white',
            display:'subgrid',
            justifyContent:'center',
            alingItems:'center',
            margin:0,
            padding:"0%",
            border: 0,
          
            }}> <Carrousel/>
            <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: "100%",
          height: '100%',
          justifyContent:'center',
        alingItems:'center',
        margin:0,
        padding:"0%",
        border: 0,
        },
      }}
    ><div style={{ textAlign: "center" }}>
    <img src="PCF5.png" alt="VL" width="400" height="225"></img>
</div>
    </Box>
    
        </Box> 
        

        )
          
    }
    
export default Home;
