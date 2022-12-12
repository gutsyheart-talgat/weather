import { useSelector } from "react-redux";
import style from "../../styles/time.module.scss";

export default function Time() {
  const weather = useSelector(state=>state.toolkit.city)
  return (
		<div className={style.times}>
			<div className={style.time}>
				<p>{Math.round(weather.main.temp_max -273)}°</p>
				<img src={`http://openweathermap.org/img/wn/${weather.weather[0]['icon']}@2x.png`}/>
				<p>Макс. темп.</p>
			</div>
			<div className={style.time}>
				<p>{Math.round(weather.main.temp_min -273)}°</p>
				<img src={`http://openweathermap.org/img/wn/${weather.weather[0]['icon']}@2x.png`}/>
				<p>Мин. темп.</p>
			</div>
		</div>
	);
}
