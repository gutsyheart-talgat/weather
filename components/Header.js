import style from '../styles/Header.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getWeather } from '../app/toolkitSlice';
export default function Header() {
	const [city,setCity] = useState()
	const handle =(e)=>{
		setCity(e.target.value)
	}

	const weather = useSelector(state=>state.toolkit.city)
	const dispatch = useDispatch()
	const newCity = () =>{
		const resolve = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a9f6d60fe4a59c1440099e9a6d10ef6d`);
		const response =  resolve.then(response=>response.json())
		const datas = response.then(data=>dispatch(getWeather(data)));
		
		console.log(city,'name')
	}

  return (
    <div className={style.header}>
      <div className={style.map}>
				<img src="/map.png"/>
				<p>{weather?.name}</p>
			</div>
			<nav>
				<a>Погода</a>
				<a>Новости</a>
				<a>Карты</a>
				<a>Информеры</a>
				<a>Приложения</a>
			</nav>
			<div className={style.search}>
				<input
					value={city}
					onChange={event=>handle(event)}
					placeholder='Search'
					type="text"/>
					
				<button onClick={()=>newCity()}>
					<img src="/search.svg"/>
				</button>
			</div>
			<button>
				<img
				src='/notification.png'/>
			</button>
    </div>
  );
}
