import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  Area,
  ResponsiveContainer,
  AreaChart,
  PieChart,
  Cell,
  colors,
  ReferenceDot,
  ScatterChart,
  Scatter,
  ZAxis,
  ReferenceArea,
} from "recharts";
import axios from "axios";
const Chart = () => {
  const [data, setData] = useState([]);
  const [hyderabadData ,setHyderabadData] = useState([]);
  const [inputCity, setInputCity] = useState("");
  const [requiredField, setRequiredField] = useState([]);
  const apiKey = "38b6f1376544a95a0574c327c6d35ec0";
   
  const { name, main, wind } = { ...hyderabadData  };
  console.log(hyderabadData ,"hyderabadData")
 
  
  console.log(name, "name");
  console.log(main, "main");
  console.log(wind, "wind");

  const { feels_like, humidity, pressure, temp, temp_max, temp_min } = {
    ...main,
  };
  console.log(feels_like, "feel");

  const mydata = [
    {
      name: "Hyderabad",
      feels_like: feels_like,
      humidity: humidity,
      pressure: pressure,
      temp: temp,
      temp_max: temp_max,
      temp_min: temp_min,
    },
   
   
  ];


 

  const getWeatherDetails = (cityName) => {
    const apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      "hyderabad" +
      "&appid=" +
      apiKey;
    axios
      .get(apiUrl)
      .then((res) => {
        console.log("response", res.data);

        setHyderabadData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    getWeatherDetails();
  }, []);

  return (
    <>
      <div style={{ background: "#234a74", height: "50vh", marginTop: "20px" }}>
        <ResponsiveContainer height="100%">
          <AreaChart
            data={mydata}
            margin={{ top: 20, right: 10, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="temp" />
            <YAxis dataKey="pressure" />
            {/* <CartesianGrid  /> */}
            <Tooltip dataKey="humidity" />
            <ReferenceLine x="temp" stroke="red" label="Min PAGE" />
            <ReferenceLine label="Max" />
            <Area type="step" dataKey="name" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Chart;
