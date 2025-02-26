import { Routes, Route } from "react-router-dom";
import EntityTesting from "./components/testing/EntityTesting";
import MapGenerator from "./components/map/MapGenerator";
import Player from "./entities/player/Player";
import { createContext, useState } from "react";
// CSS Imports
import "./App.css";

export const globalContext = createContext();

const App = () => {
  const [player, setPlayer] = useState(new Player("Player", 100, 10));
  console.log(player);
  return (
    // Global context values used across the application
    <globalContext.Provider value={{ player, setPlayer }}>
      <Routes>
        <Route path="/entity" element={<EntityTesting />} />
        <Route path="/map" element={<MapGenerator />} />
      </Routes>
    </globalContext.Provider>
  );
};

export default App;
