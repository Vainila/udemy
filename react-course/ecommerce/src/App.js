import React from "react";
import { Route, Routes, Link} from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage/HomePage.component";
import HatsPage from "./pages/HatsPage/HatsPage.component";
import JacketsPage from "./pages/JacketsPage/JacketsPage.component";
import SneakersPage from "./pages/SneakersPage/SneakersPage.component";
import WomenPage from "./pages/WomenPage/WomenPage.component";
import MenPage from "./pages/MenPage/MenPage.component";

const App =()=>  
   (
      <Routes>
         <Route path={"/"} element={<HomePage />}/>        
         <Route path={"/hats"} element={<HatsPage/>} />
         <Route path={"/jackets"} element={<JacketsPage/>} />
         <Route path={"/sneakers"} element={<SneakersPage/>} />
         <Route path={"/women"} element={<WomenPage/>} />
         <Route path={"/men"} element={<MenPage/>} />

      </Routes>);
   


export default App;
