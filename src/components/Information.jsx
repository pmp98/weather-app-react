import { Grid, Typography,styled } from "@mui/material";
import {
  LocationOn,
  Opacity,
  SettingsBrightness,
  Brightness5,
  Brightness6,
  Dehaze,
  Cloud,
} from "@mui/icons-material";

const Row = styled(Typography)({
  padding: 10,
  fontSize: 20,
  letterSpacing: 2,
  '& > svg': {
      marginRight: 10
  }
});const Error = styled(Typography)({
  
  padding: 20,
  fontSize:'25px'
})

// Object.keys(result)=> if object is null returns 0 ,used to check undefined.
const Information = ({ result }) => {
  return result && Object.keys(result).length > 0 ? (
    <Grid container sm={12} md={12} sx={{ display:'flex',flexDirection:'column',pt:'30px',height:'70%' }}>
       <Row
          sx={{
            fontSize: 20,
            letterSpacing: 2,
            textAlign:'center',
            fontWeight:'600'
          }}
        >
          Weather info of your city
        </Row>
      <Row>
        <LocationOn />
        {result.name},{result.sys.country}
      </Row>
      <Row>
        <SettingsBrightness />
        Temprature: {result.main.temp}
      </Row>
      <Row>
        <Opacity />
        Humidity: {result.main.humidity}
      </Row>
      <Row>
        <Brightness5 />
        Sun Rise: {new Date(result.sys.sunrise *1000).toLocaleTimeString()}
      </Row>
      <Row>
        <Brightness6 />
        Sun Set: {new Date(result.sys.sunset*1000).toLocaleTimeString()}
      </Row>
      <Row>
        <Dehaze />
        Humidty: {result.weather[0].main}
      </Row>
      <Row>
        <Cloud />
        Clouds: {result.clouds.all}%
      </Row>
    </Grid>
  ) : <Error sx={{margin: {md:'50px',xs:'none'},}}>Please enter the values to check weather</Error>;
};

export default Information;
