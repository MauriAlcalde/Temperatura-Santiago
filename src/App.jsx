import { useEffect } from "react";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Day from './pages/Day'

import dataActions from "./redux/actions/dataActions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(dataActions.obtenerDias())
  })
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:Day" element={<Day  />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
