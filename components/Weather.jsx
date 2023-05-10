import Image from "next/image";
import React from "react";

const Weather = ({ data }) => {
  console.log(data);
  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10">
      {/*Top*/}
      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width="100"
            height="100"
          />
          <p style={{ fontSize: "2em" }}>{data.weather[0].main}</p>
        </div>
        <p style={{ fontSize: "8rem", marginLeft: "1.5em" }}>
          {data.main.temp.toFixed(0)}&#176;
        </p>
      </div>
      {/*bottom*/}
      <div
        style={{
          position: "absolute",
          left: "0px",
          top: "210px",
          backgroundColor: "rgba(0,0,0, .7)",
          padding: "8px",
          borderRadius: "7px",
          width: "100%",
        }}
      >
        <p
          style={{
            fontSize: "1.5rem",
            textAlign: "center",
            padding: "17px",
          }}
        >
          Tempo em {data.name}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          <div>
            <p style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
              Sensação de
            </p>
            <p style={{ fontSize: "1.25rem" }}>
              {data.main.feels_like.toFixed(0)}&#176;
            </p>
          </div>
          <div>
            <p style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Humidade</p>
            <p style={{ fontSize: "1.25rem" }}>{data.main.humidity}%</p>
          </div>
          <div>
            <p style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Ventos</p>
            <p style={{ fontSize: "1.25rem" }}>
              {data.wind.speed.toFixed(0)} MPH
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
