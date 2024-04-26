import Card from "./Card";
import style from "../../styles/main.module.scss";
import Days from "./Days";
import Time from "./Time";
export default function Main({weather}) {
  
  return (
    <div className={style.main}>
      <div className={style.top}>
        {<Card cityWeather={weather}/>}
        
        <Time />
        
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0]['icon']}@2x.png`} className={style.cloud}/>
       
      </div>
      <div className={style.days}>
        <Days />
      </div>
      
    </div>
  );
}
