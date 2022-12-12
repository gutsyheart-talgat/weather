import { useSelector } from "react-redux";
import style from "../../styles/Card.module.scss";



export default function Card({cityWeather}) {
  
  console.log(cityWeather,"city")
  return (
    <div className={style.card}>
      <div>
        <p className={style.date}>Сегодня</p>
        <p className={style.gradus}>{Math.round(cityWeather.main.temp - 273)}°</p>
        <p className={style.pogoda}>{cityWeather?.weather[0]['description']}</p>
        <div className={style.veter}>
          <img src="/windy.svg" />
          <p>Ветер</p>
          <div className={style.line} />
          <p>{cityWeather?.wind['speed']} м/с</p>
        </div>
        <div className={style.vlazhnost}>
          <img src="/hum.svg" />
          <p>Влажность</p>
          <div className={style.line} />
          <p>{cityWeather?.main.humidity} %</p>
        </div>
      </div>
    </div>
  );
}
