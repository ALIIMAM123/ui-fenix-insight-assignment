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
const MyChart = () => {



  const [locationData ,setLocationData] = useState([]);

console.log(locationData ,"locationData")

const {current ,location} = {...locationData};
// console.log(current ,"current")
console.log(location ,"location");
const {pressure_in , temp_c ,temp_f} = {...current};
const {name ,country} = {...location}

// console.log(pressure_in ,temp_c ,temp_f ,"xx")
console.log(name ,country ,"xxxx")


 const mydata = [
    {
      "name": name,
      "country":country,
      "pressure_in":pressure_in,
      "temp_c":temp_c,
      "temp_f":temp_f,
      "label":"X-axis"
      // feels_like: feels_like,
      // humidity: humidity,
      // pressure: pressure,
      // temp: temp,
      // temp_max: temp_max,
      // temp_min: temp_min,
    },
  ];

  const fetchApi = async () => {
    const url =
      'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13'
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '6d96fbcf33msh1fe30a5b97089a7p166821jsnf46ad642143a',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      },
    }

    try {
      const response = await fetch(url, options)
      const result = await response.json()
      console.log(result , "result")
      setLocationData(result)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div className=" chart-container container-fluid chart-shadow-container" 
    >
      <div className="row">
        <div className="col-12 p-5">
        <h1 className="text-center" style = {{color:"grey" ,opacity:"0.9"}}>Get Boston Temperature In this Graph</h1>
          <div
            style={{
              backgroundColor: "#89a7d9 ",
              marginTop: "20px",
              borderRadius: "10px",
              width: "100%",
              height: "400px",
              
            }}
          >
        
            <ResponsiveContainer height="100%">
              <AreaChart
                data={mydata}
                margin={{
                  top: 20,
                  right: 10,
                  left: 0,
                  bottom: 0,
              
                }}
              >
                <XAxis dataKey="pressure_in" stroke="white" alphabetic="label" />
                <YAxis dataKey="temp_c" stroke="white"  />
                <CartesianGrid />
                <Tooltip dataKey="humidity" />
                <ReferenceLine x="temp" stroke="white" label="Min PAGE" />
                <ReferenceLine label="Max" />
                <Area type="step" dataKey="name" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
    //   <div className="chart-container" style={{height:"400px" ,backgroundColor:"grey" ,width:"100%" ,margin:"0px"}}>
    //     {/* <div className="container-fluid"> */}
    //     <ResponsiveContainer width={"100%"} height="100%">
    //   <AreaChart data={data}
    //     >
    //     <XAxis dataKey="name" />
    //     <YAxis />
    //     <CartesianGrid strokeDasharray="3 3" />
    //     <Tooltip />
    //     <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
    //     <ReferenceLine y={4000} label="Max" stroke="red" strokeDasharray="3 3" />
    //     <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
    //   </AreaChart>
    // </ResponsiveContainer>
    //     </div>
    // </div>
  );
};

export default MyChart;
