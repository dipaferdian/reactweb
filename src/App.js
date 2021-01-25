import "./sass/main.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import React, { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import fetch_Food from './redux/actions/foods/food_action'

function App() {

  const dispatch = useDispatch();
  const item     = useSelector(state=>state);

  useEffect(()=>{

    dispatch(fetch_Food())

  },[dispatch])

  return (
    <>
     {console.log(item)}
    </>
  );

}

export default App;
