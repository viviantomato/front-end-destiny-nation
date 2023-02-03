import React from "react";
import { Link } from "react-router-dom";
// import logo from "../img/maps.jpg";
import { useState } from "react";
import { Autocomplete } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import "./Searchbox.css";

const MOCK_RESPONSE = {
  data: [
    {
      id: "7831779",
      type: "destination",
      attributes: {
        slug: "barcelona-spain",
        destination_type: "City",
        short_name: "Barcelona",
        name: "Barcelona, Spain",
        long_name: "Barcelona, Spain",
        latitude: 41.38879,
        longitude: 2.15899,
        bounding_box: null,
        countable: true,
        average_rating: 4.61538461538461,
        check_in_count: 7252,
      },
      relationships: {
        known_for: {
          data: [
            { id: "12", type: "known_for" },
            { id: "4", type: "known_for" },
            { id: "3", type: "known_for" },
            { id: "17", type: "known_for" },
            { id: "2", type: "known_for" },
            { id: "8", type: "known_for" },
            { id: "7", type: "known_for" },
            { id: "21", type: "known_for" },
            { id: "18", type: "known_for" },
            { id: "1", type: "known_for" },
            { id: "19", type: "known_for" },
            { id: "6", type: "known_for" },
          ],
        },
        featured_photo: { data: { id: "1289", type: "photo" } },
      },
    },
    {
      id: "10815068",
      type: "destination",
      attributes: {
        slug: "barcelona-venezuela",
        destination_type: "City",
        short_name: "Barcelona",
        name: "Barcelona, Venezuela",
        long_name: "Barcelona, Venezuela",
        latitude: 10.13625,
        longitude: -64.68618,
        bounding_box: null,
        countable: true,
        average_rating: 0.0,
        check_in_count: 1,
      },
      relationships: {
        known_for: { data: [] },
        featured_photo: { data: null },
      },
    },
    {
      id: "10726579",
      type: "destination",
      attributes: {
        slug: "barcelona-ny-usa",
        destination_type: "City",
        short_name: "Barcelona",
        name: "Barcelona, NY",
        long_name: "Barcelona, New York State, US",
        latitude: 42.34034,
        longitude: -79.59588,
        bounding_box: null,
        countable: true,
        average_rating: 0.0,
        check_in_count: 0,
      },
      relationships: {
        known_for: { data: [] },
        featured_photo: { data: null },
      },
    },
    {
      id: "6809218",
      type: "destination",
      attributes: {
        slug: "barcelona-brazil",
        destination_type: "City",
        short_name: "Barcelona",
        name: "Barcelona, Brazil",
        long_name: "Barcelona, Brazil",
        latitude: -5.95056,
        longitude: -35.92639,
        bounding_box: null,
        countable: true,
        average_rating: 0.0,
        check_in_count: 0,
      },
      relationships: {
        known_for: { data: [] },
        featured_photo: { data: null },
      },
    },
    {
      id: "9846331",
      type: "destination",
      attributes: {
        slug: "barcelona-philippines-2",
        destination_type: "City",
        short_name: "Barcelona",
        name: "Barcelona, Philippines",
        long_name: "Barcelona, Philippines",
        latitude: 12.8683,
        longitude: 124.1419,
        bounding_box: null,
        countable: true,
        average_rating: 0.0,
        check_in_count: 0,
      },
      relationships: {
        known_for: { data: [] },
        featured_photo: { data: null },
      },
    },
  ],
  included: [
    {
      id: "1289",
      type: "photo",
      attributes: {
        image: {
          full: "https://cdn.roadgoat.com/uploads/photo/image/1289/travel-guide-of-barcelona-spain-original.jpg",
          large:
            "https://cdn.roadgoat.com/uploads/photo/image/1289/large_travel-guide-of-barcelona-spain-original.jpg",
          medium:
            "https://cdn.roadgoat.com/uploads/photo/image/1289/medium_travel-guide-of-barcelona-spain-original.jpg",
          thumb:
            "https://cdn.roadgoat.com/uploads/photo/image/1289/thumb_travel-guide-of-barcelona-spain-original.jpg",
          avatar:
            "https://cdn.roadgoat.com/uploads/photo/image/1289/avatar_travel-guide-of-barcelona-spain-original.jpg",
        },
      },
    },
    {
      id: "12",
      type: "known_for",
      attributes: {
        slug: "charming",
        name: "Charming",
        icon: "https://cdn.roadgoat.com/images/shared/icons/known-for/charming",
      },
    },
    {
      id: "4",
      type: "known_for",
      attributes: {
        slug: "foodie",
        name: "Foodie",
        icon: "https://cdn.roadgoat.com/images/shared/icons/known-for/foodie",
      },
    },
    {
      id: "3",
      type: "known_for",
      attributes: {
        slug: "nightlife",
        name: "Nightlife",
        icon: "https://cdn.roadgoat.com/images/shared/icons/known-for/nightlife",
      },
    },
    {
      id: "17",
      type: "known_for",
      attributes: {
        slug: "architecture",
        name: "Architecture",
        icon: "https://cdn.roadgoat.com/images/shared/icons/known-for/architecture",
      },
    },
    {
      id: "2",
      type: "known_for",
      attributes: {
        slug: "history",
        name: "History",
        icon: "https://cdn.roadgoat.com/images/shared/icons/known-for/history",
      },
    },
    {
      id: "8",
      type: "known_for",
      attributes: {
        slug: "museums",
        name: "Museums",
        icon: "https://cdn.roadgoat.com/images/shared/icons/known-for/museums",
      },
    },
    {
      id: "7",
      type: "known_for",
      attributes: {
        slug: "performing-arts",
        name: "Performing Arts",
        icon: "https://cdn.roadgoat.com/images/shared/icons/known-for/performing-arts",
      },
    },
    {
      id: "21",
      type: "known_for",
      attributes: {
        slug: "music",
        name: "Music",
        icon: "https://cdn.roadgoat.com/images/shared/icons/known-for/music",
      },
    },
    {
      id: "18",
      type: "known_for",
      attributes: {
        slug: "lgbt-friendly",
        name: "LGBT Scene",
        icon: "https://cdn.roadgoat.com/images/shared/icons/known-for/lgbt-friendly",
      },
    },
    {
      id: "1",
      type: "known_for",
      attributes: {
        slug: "beach-town",
        name: "Beach Town",
        icon: "https://cdn.roadgoat.com/images/shared/icons/known-for/beach-town",
      },
    },
    {
      id: "19",
      type: "known_for",
      attributes: {
        slug: "wineries",
        name: "Wineries",
        icon: "https://cdn.roadgoat.com/images/shared/icons/known-for/wineries",
      },
    },
    {
      id: "6",
      type: "known_for",
      attributes: {
        slug: "shopping",
        name: "Shopping",
        icon: "https://cdn.roadgoat.com/images/shared/icons/known-for/shopping",
      },
    },
  ],
};

const Searchbox = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [resLocationList, setResLocationList] = useState(MOCK_RESPONSE);
  const [searchResult, setSearchResult] = useState([]);
  const [open, setOpen] = useState(false);

  const enteredValueHandler = (event) => {
    // if (event?.target?.value) {
    setEnteredValue(event?.target?.value);
    // }
  };

  const resLocationHandler = (event) => {
    setResLocationList(event.target.value);
  };

  const onClickHandler = () => {
    //Search and open up the autocomplete
    setOpen(true);
    getBySlug();
  };

  const onChangeHandler = (event, value) => {
    console.log(event, value);
  };

  function getBySlug() {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Basic OWVkOTExMmJhY2Q0NjZhNGI4ZDdlOGMyNzA2ZGU2ODM6NWVjOTllMjIwYTEzYTQ3ZDBjZmNkMDU1NjZiNGYzZTg="
    );
    var raw = "";
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch(
      `https://api.roadgoat.com/api/v2/destinations/auto_complete?q=${enteredValue}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("result", result);
        setResLocationList(result);
        setSearchResult(
          result.data.map((datum) => ({
            label: datum.attributes.long_name,
          }))
        );
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <section>
      <div className="container">
        {/* <TextField
          name="inputCity"
          id="outlined-basic"
          label="Enter City"
          variant="outlined"
          value={enteredValue}
          onChange={enteredValueHandler}
        /> */}
        <Autocomplete
          filterOptions={(x) => x}
          options={searchResult}
          sx={{ width: 300 }}
          inputValue={enteredValue}
          onInputChange={enteredValueHandler}
          open={open}
          onOpen={() => {
            // setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          renderInput={(params) => (
            <TextField {...params} value={enteredValue} />
          )}
          onChange={onChangeHandler}
          clearOnBlur={false}
          openOnFocus={false}
        />

        {/* <Button
          id="outlined-basic"
          onClick={getBySlug}
          variant="contained"
          color="primary"
        >
          Search
        </Button> */}

        <Button
          id="outlined-basic"
          variant="contained"
          onClick={onClickHandler}
        >
          Show List
        </Button>
      </div>
    </section>
  );
};

export default Searchbox;
