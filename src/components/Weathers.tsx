import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from "axios";

type jejuWeatherState = {
    cityName: string;
    sunrise: string;
    sunset: string;
    weather: string;
    windSpeed: string;
    temp: string;
    icon: string;
}

// Generics를 좀 더 공부해보자

function Weathers() {
    const [jejuWeather, setJejuWeather] = useState<jejuWeatherState>({
        cityName: "",
        sunrise: "",
        sunset: "",
        weather: "",
        windSpeed: "",
        temp: "",
        icon: ""
    });
    const [dayDate, setDayDate] = useState("");
    const [findDust, setFindDust] = useState<number>();

    useEffect(() => {
        const url = "https://api.openweathermap.org/data/2.5/weather?q=jeju&appid=811b0a454728fbd5b85ea8e5dd837350&mode=json&units=metric"
        axios
            .get(url)
            .then((data) => {
                const iconUrl = `http://openweathermap.org/img/wn/${data.data.weather[0].icon}@2x.png`;

                let date_sunrise = new Date(data.data.sys.sunrise * 1000);
                let date_sunset = new Date(data.data.sys.sunset * 1000);

                let sunrise = `${date_sunrise.getHours()}시 ${date_sunrise.getMinutes()}분`
                let sunset = `${date_sunset.getHours()}시 ${date_sunset.getMinutes()}분`

                const objectTemp = {
                    cityName: data.data.name,
                    sunrise,
                    sunset,
                    weather: data.data.weather[0].main,
                    windSpeed: data.data.wind.speed,
                    temp: data.data.main.temp,
                    icon: iconUrl
                };
                setJejuWeather(objectTemp);
                const _Date = new Date;
                const stringTemp = `
                    ${_Date.getFullYear()}년 ${_Date.getMonth() + 1}월 ${_Date.getDate()}일
                    ${_Date.getHours()}시 ${_Date.getMinutes()}분
                    `
                setDayDate(stringTemp)
            })
            .catch((error) => {
                console.log(error);
            })
        axios
        .get('http://api.openweathermap.org/data/2.5/air_pollution?lat=33.5097&lon=126.5219&appid=811b0a454728fbd5b85ea8e5dd837350')
        .then((data:any): void=>{
            setFindDust(data.data.list[0].main.aqi);
        })
    }, [])

    return (
        <div style={{ marginTop: "10vh"}}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Weather>
                <img src={jejuWeather.icon} />
                <div>{dayDate}</div>
                <div>{jejuWeather.cityName}</div>
                <div>{Math.round(Number(jejuWeather.temp))}도</div>
                <div>일출 : {jejuWeather.sunrise}</div>
                <div>일몰 : {jejuWeather.sunset}</div>
                <div>풍속 : {jejuWeather.windSpeed}</div>
                </Weather>
                <FineDust >
                    <h2>{findDust}</h2>
                    <div>1 = 좋음, 2 = 보통, 3 = 보통, 4 = 나쁨, 5 = 매우 나쁨.</div>
                </FineDust>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <WeekWeather />
            </div>
        </div>
    )
}
const WeekWeather = styled.div`
    // border: 1px solid red;
    width: 300px;
    height: 300px;
    margin-top: 5vh;
    text-align: center;
    @media screen and (max-width: 780px) {
        // border: 1px solid blue;
        width: 250px;
        height: 250px;
        margin-top: 5vh;
        text-align: center;
    }
`

const FineDust = styled.div`
    width: 300px;
    height: 300px;
    margin-top: 15vh;
    margin-left: 5vw;
    text-align: center;
    @media screen and (max-width: 780px) {
        width: 250px;
        height: 250px;
        margin-top: 15vh;
        margin-left: 5vw;
        text-align: center;
    }
`
const Weather = styled.div`
    width: 300px;
    height: 300px;
    margin-top: 5vh;
    text-align: center;
    @media screen and (max-width: 780px) {
        width: 250px;
        height: 250px;
        margin-top: 5vh;
        text-align: center;
    }
`

export default Weathers
