import { useState } from "react";
import { Box, Grid, Typography, styled } from "@mui/material";
import Form from "../components/Form";
import Information from "../components/Information";

const Component = styled(Grid)({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  width: { md: "65%", xs: "100%" },
});

const Home = () => {
  const [result, setResult] = useState({});

  return (
    <Component container xs={12}>
      <Grid
        container
        xs={12}
        md={5}
        sx={{
          width: "73%",
          height: "90vh",
          margin: { xs: "0 20px", md: "0px" },
          background:
            "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
        }}
      >
        
        <Form setResult={setResult} />
        <Information result={result} />
      </Grid>
    </Component>
  );
};

export default Home;
