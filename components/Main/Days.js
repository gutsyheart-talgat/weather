import style from "../../styles/days.module.scss";

export default function Days() {
  const resolve = fetch(`https://api.openweathermap.org/data/2.5/forecast?q=bishkek&appid=a9f6d60fe4a59c1440099e9a6d10ef6d`);
  const response =  resolve.then(response=>response.json())
  const datas = response.then(data=>console.log(data,'data'));
  const days = [
    {
      id: 1,
      day: "Завтра, 19 февраля",
      gradus: "34°",
      pogoda: "Солнечно",
      veter: "Ветер  |  15 km/h",
      vlaga: "Влажность  |  26 %",
    },
    {
      id: 2,
      day: "Воскресенье, 20 февраля",
      gradus: "18°",
      pogoda: "Облачно",
      veter: "Ветер  |  10 km/h",
      vlaga: "Влажность  |  54 %",
    },
    {
      id: 3,
      day: "Понедельник, 21 февраля",
      gradus: "16°",
      pogoda: "Облачно",
      veter: "Ветер  |  10 km/h",
      vlaga: "Влажность  |  54 %",
    },
    {
      id: 4,
      day: "Вторник, 22 февраля",
      gradus: "24°",
      pogoda: "Облачно",
      veter: "Ветер  |  10 km/h",
      vlaga: "Влажность  |  26 %",
    },
  ];
  return (
    <div className={style.days}>
      {days.map((day) => (
        <div key={day.id} className={style.day}>
          <p className={style.nameDay}>{day.day}</p>
          <p className={style.gradus}>{day.gradus}</p>
          <p className={style.pogoda}>{day.pogoda}</p>
          <div className={style.veter}>
            <img src="/windy.svg" />
            <p>{day.veter}</p>
          </div>
          <div className={style.vlaga}>
            <img src="/hum.svg" />
            <p>{day.vlaga}</p>
          </div>
        </div>
      ))}
			<button className={style.btn}>Просканировать погоду</button>
    </div>
  );
}
