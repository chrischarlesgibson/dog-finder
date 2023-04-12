import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import MenuItem from "@mui/material/MenuItem";
import { Select, Button } from "@mui/material";

import { useState } from "react";

export default function FormPropsTextFields() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "& .MuiTextField-root": { m: 1, width: "25%" },
        "& .MuiSelect-root": { m: 1, width: "37.5%" },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{ display: "flex", width: "100%" }}>
        <TextField id="outlined-number" label="minAge" type="number" />
        <TextField id="outlined-number" label="maxAge" type="number" />
        <TextField
          id="outlined-search"
          label="zip code"
          type="search"
          sx={{ width: "25%" }}
        />
      </div>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{ width: "56.25%" }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{ width: "56.25%" }}
        >
          <MenuItem value={"ASC"}>Ten</MenuItem>
          <MenuItem value={"DSC"}>Twenty</MenuItem>
        </Select>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{ width: "56.25%" }}
        >
          <MenuItem value={25}>Ten</MenuItem>
          <MenuItem value={50}>Twenty</MenuItem>
        </Select>
      </Box>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, backgroundColor: "rgb(75, 9, 75)" }}
      >
        search
      </Button>
    </Box>
  );
}
