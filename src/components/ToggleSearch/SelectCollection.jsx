import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Search Bar/Searchbar.css'

export default function SelectCollection() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box  style={{margin:"5px 0px" ,width:'198px',height:"50px"}} >
      <FormControl className='form-control' >
        <InputLabel id="demo-simple-select-label" style={{color:"white",fontWeight:"bold",fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana",fontSize:"15px",margin:"5px 0px"}}>All Collection</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          className="select"
        >
          <MenuItem value={10}>All Collection</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
