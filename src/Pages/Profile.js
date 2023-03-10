import React from "react";
import "./Profile.css";
import "./Footprint";
import Footprint from "./Footprint";
import "../components/Wishlist";
import Wishlist from "../components/Wishlist";
import "../components/NewCityForm";
// import NewCityForm from "../components/NewCityForm";

import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const Profile = () => (
  <div>
    <h1>Profile ⌨️ </h1>
    <main>
      <h2>Bio 🎴 </h2>
      <p> </p>
      {/* <TextField id="outlined-basic" label="Who you are" variant="outlined" /> */}

      <Button variant="contained">Connect</Button>
      <Button variant="contained">Message</Button>

      <h2>Footprint 🐾 </h2>
      <Footprint></Footprint>

      <h2>Wishlist ✨ </h2>
      <FormGroup>
        <FormControlLabel
          control={<Switch defaultChecked color="secondary" />}
          label="Public"
        />
      </FormGroup>
      <Wishlist> </Wishlist>

      <h2>Add a Destination</h2>
      {/* <NewCityForm> </NewCityForm> */}
    </main>
  </div>
);

export default Profile;
