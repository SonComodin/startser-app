import React from 'react';
import { Box, CssBaseline, Paper, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes as appRoutes } from './routes';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  const theme = createTheme({
    palette: {
     primary: {
     light: "#D5DBDB",
     main: "#00D979",
     dark: "#005db0",
     contrastText: "#000",
    },
    secondary:{
    main: "#00D979",
    light: "#82e9de",
    dark: "#00867d",
    contrastText: "#000",
    },
  }
});

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Router>
          <Navbar />
          <Routes>
            <Route>
              {appRoutes.map((route) =>(
                <Route
                key={route.key}
                path={route.path}
                element={<route.component/>}
                />
              ))}
            </Route>
          </Routes>
        </Router>
        <Footer/>
      </Box>
    </ThemeProvider>
  );
}
export default App;
