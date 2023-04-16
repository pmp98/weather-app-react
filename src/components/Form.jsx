import React, { useState } from "react";
import { Button, Grid, Typography, styled,TextField } from "@mui/material";
import { getWeather } from "../services/api";
const Container = styled(Grid)({
  boxShadow: '-3px 4px 19px -8px rgba(0,0,0,0.45)',
  padding: 10,
  height:'30%'
});


const GetButton = styled(Button)({
margin:'10px'
});

const Form = ({setResult}) => {
  const [data, setData] = useState({ city: "", country: "" });
  console.log("data: ", data);

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const getWeatherInfo = async () => {
   let response= await getWeather(data.city, data.country);
   setResult(response);
  };

  return (
    <Container container>
      <Grid item xs={12} md={12} sx={{display:'flex',flexDirection:'column',}}>
      <Typography
          sx={{
            fontSize: 20,
            letterSpacing: 2,
            fontWeight:'600',
            textAlign:'center'
          }}
        >
          Weather App
        </Typography>
      <TextField  name="city" label="City" variant="standard"  onChange={(e) => {
          handleChange(e);
        }} />
         <TextField  name="country" label="Country" variant="standard"   onChange={(e) => {
          handleChange(e);
        }} />
      <GetButton
        variant="contained"
        onClick={() => {
          getWeatherInfo();
        }}
      >
        Get Weather
      </GetButton>
      </Grid>
    </Container>
  );
};

export default Form;
