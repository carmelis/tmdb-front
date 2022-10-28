import Home from "../src/screens/Home/Home"
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import Login from "./screens/Login/Login";
import Navbar from "./components/Nadvar";
import Movies from "./screens/Movies/Movies";
import Series from "./screens/Series/Series";
import Favoritos from "./screens/Favoritos/Favoritos";
import { useState } from "react";
import { AuthenticationProvider } from "./contexts/authentication";
import Buscador from "./screens/Buscador/Buscador";
import Signin from "./screens/Signin/Signin";
const queryClient = new QueryClient();
function App() {

  

  return (
    <QueryClientProvider client={queryClient}>
    <AuthenticationProvider>
    <Navbar />
    <Routes> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/series" element={<Series />}/>
        <Route path="/favorites" element={<Favoritos />}/>
        <Route path="/buscador/:buscador" element={<Buscador />}/>
     </Routes>
     </AuthenticationProvider>
     </QueryClientProvider>
  );
}

export default App;
