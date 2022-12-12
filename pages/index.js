import style from '../styles/Home.module.scss'
import Header from '../components/Header'
import Main from '../components/Main/index'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchWeather } from '../app/toolkitSlice';

export default function Home(){
  useEffect(()=>{
    dispatch(fetchWeather())
  },[])
  const dispatch = useDispatch()

  
  const weather = useSelector(state=>state.toolkit.city)
  console.log(weather,'weather')
  return(
    <div className={style.container}>
      <Header />
      {weather && <Main weather={weather}/>}
      <img src='/Vector 12.svg' className={style.vector}/>
    </div>
  )
}