import { useEffect } from "react";
import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  getTodosFailure,
  getTodosRequest,
  getTodosSuccess,
  removeTodo,
  toggleTodo
} from "../redux/app/action";
import { getTodos } from "./api";
import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function valuetext(value) {
  return `${value}`;
}

function TodoItem({ name, location, city, description, rating, price }) {
  return (
    <div
      style={{
        display: "flex",
        padding: "1rem",
        gap: "2rem",
        border: "1px solid gray",
        borderRadius: "20px",
        background: "green",
        margin: "20px"
      }}
    >
      <div
        style={{
          background: "black",
          padding: "10px",
          fontSize: "17px",
          color: "white",
          border: "2px solid blue",
          borderRadius: "10px",
          margin: "10px"
        }}
      >
        {name}
      </div>
      <div> Rating: {rating} </div>
      <div>₹: {price}</div>
      <div
        style={{
          background: "black",
          padding: "10px",
          fontSize: "17px",
          color: "white",
          border: "2px solid blue",
          borderRadius: "10px",
          margin: "10px"
        }}
      >
        {location}
      </div>
      <div>{city}</div>
    </div>
  );
}

function TodoList() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { todos, isLoading, isError } = useSelector(
    (state) => state.app,
    shallowEqual
  );

  const dispatch = useDispatch();

  // console.log(count)

  useEffect(() => {
    // getTodos(dispatch);
    dispatch(getTodos());
  }, []);

  const handleDelete = (id) => {
    const action = removeTodo(id);
    dispatch(action);
  };

  const handleToggle = (id) => {
    const action = toggleTodo(id);
    dispatch(action);
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ width: "20%" }}>
          <div>
            <h2>Filters</h2>
          </div>
          <div>
            <h5>Popular locations in Delhi, India</h5>
          </div>
          <div>
            <input type="text" placeholder="Search..." />
          </div>
          <div>
            <Button
              variant="outlined"
              style={{
                background: "rgb(242,242,242)",
                color: "rgb(34,34,34)",
                border: "none"
              }}
            >
              Mahipalpur
            </Button>
          </div>
          <div>
            <Button
              variant="outlined"
              style={{
                background: "rgb(242,242,242)",
                color: "rgb(34,34,34)",
                border: "none"
              }}
            >
              Paharganj
            </Button>
          </div>
          <div>
            <Button
              variant="outlined"
              style={{
                background: "rgb(242,242,242)",
                color: "rgb(34,34,34)",
                border: "none"
              }}
            >
              New Delhi Railway Station
            </Button>
          </div>
          <div>
            <Button
              variant="outlined"
              style={{
                background: "rgb(242,242,242)",
                color: "rgb(34,34,34)",
                border: "none"
              }}
            >
              Karol Bagh
            </Button>
          </div>
          <div>
            <Button
              variant="outlined"
              style={{
                background: "rgb(242,242,242)",
                color: "rgb(34,34,34)",
                border: "none"
              }}
            >
              Dwarka, New Delhi
            </Button>
          </div>
          <div>
            <div>
              <Button
                variant="outlined"
                style={{
                  background: "none",
                  color: "red",
                  border: "none"
                }}
              >
                + View More
              </Button>
            </div>
            <hr />
            <div>
              <h4>Price </h4>
              <Box>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
              </Box>
            </div>
          </div>
          <hr />
          <div>
            <h4>Collections</h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                fontSize: "12px",
                fontWeight: "200"
              }}
            >
              <div>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="sanitised b4 ur eyes"
                  />
                </FormGroup>
              </div>
              <div>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="vaccinated Staff"
                  />
                </FormGroup>
              </div>

              <div>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Family OYOs"
                  />
                </FormGroup>
              </div>

              <div>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="For Group Travellers"
                  />
                </FormGroup>
              </div>

              <div>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Near Airport"
                  />
                </FormGroup>
              </div>
              <div>
                <Button
                  variant="outlined"
                  style={{
                    background: "none",
                    color: "red",
                    border: "none"
                  }}
                >
                  + View More
                </Button>
              </div>
            </div>
            <hr />
            <h4>Categories</h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                fontWeight: "300",
                fontSize: "12"
              }}
            >
              <div>
                <input type="checkbox" name="OYO Rooms" label="Oyo" />{" "}
                <span style={{ fontWeight: "600" }}> OYO Rooms</span> - Super
                affordable stays with essential aminities
              </div>
              <div>
                <input type="checkbox" name="OYO Rooms" label="Oyo" />{" "}
                <span style={{ fontWeight: "600" }}> Premium</span> - Hotel at
                prime location and premium aminities
              </div>
              <div>
                <input type="checkbox" name="OYO Rooms" label="Oyo" />{" "}
                <span style={{ fontWeight: "600" }}> Townhouse </span> - Your
                friendly, premium neighbourhood hotel-Serviced by OYO
              </div>
              <div>
                <input type="checkbox" name="OYO Rooms" label="Oyo" />{" "}
                <span style={{ fontWeight: "600" }}> Flagship </span> -
                Affordable hotels at prime locations - Serviced by OYO
              </div>

              <div>
                <input type="checkbox" name="OYO Rooms" label="Oyo" />{" "}
                <span style={{ fontWeight: "600" }}> OYOX Design </span> -
                Beautiful designed private crafted for the traveller who craves
                comfort
              </div>
            </div>

            <div>
              <Button
                variant="outlined"
                style={{
                  background: "none",
                  color: "red",
                  border: "none"
                }}
              >
                + View More
              </Button>
            </div>
            <hr />
            <h4>Acoomodation Type</h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div>
                <input type="checkbox" name="OYO Rooms" label="Oyo" /> Seating
                OYO Home
              </div>
              <div>
                <input type="checkbox" name="OYO Rooms" label="Oyo" /> Seating
                Hotel
              </div>
            </div>
            <div>
              <Button
                variant="outlined"
                style={{
                  background: "none",
                  color: "red",
                  border: "none"
                }}
              >
                + View More
              </Button>
            </div>
            <hr />
            <h4>Hotel Facilities</h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div>
                <input type="checkbox" name="OYO Rooms" label="Oyo" /> Seating
                Area
              </div>
              <div>
                <input type="checkbox" name="OYO Rooms" label="Oyo" /> Seating
                AC
              </div>
              <div>
                <input type="checkbox" name="OYO Rooms" label="Oyo" /> Seating
                Full Sized Bed
              </div>
              <div>
                <input type="checkbox" name="OYO Rooms" label="Oyo" /> Seating
                King Sized Bed
              </div>
              <div>Queen Sized Bed</div>
            </div>
          </div>
          <div>
            <Button
              variant="outlined"
              style={{
                background: "none",
                color: "red",
                border: "none"
              }}
            >
              + View More
            </Button>
          </div>
          <hr />
          <div style={{ display: "flex" }}>
            <div>
              <img src="./images/w-logo.png" alt="img" height="30px" />
            </div>
            <div>
              <p>Wizard Member OYOs</p>
              <p>Get 5% off on member hotels</p>
              <div>
                <Button
                  variant="outlined"
                  style={{
                    background: "rgb(242,242,242)",
                    color: "black",
                    border: "none"
                  }}
                >
                  Show Only Wizard Member OYOs
                </Button>
              </div>
            </div>
          </div>
          <hr />
          <h4>Check-in features</h4>
          <div>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Pay at Hotel"
              />
            </FormGroup>
          </div>
        </div>

        <div style={{ width: "60%", margin: "auto" }}>
          {isLoading && <h3>Loading...</h3>}
          {isError && <h3> Something went wrong!</h3>}
          {todos.map((item) => (
            <TodoItem
              key={item.id}
              {...item}
              onDelete={handleDelete}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default TodoList;
