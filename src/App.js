import "./App.css";
import Header from "./component/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, form]);
    // setForm(form);
  };

  const removeItem = (index) => {
    const temp = data;
    temp.splice(index, 1);
    setData([...temp]);
  };

  return (
    <div className="App">
      <Header />
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            label="name"
          />
          <TextField
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            label="email"
          />
          <Button variant="contained" color="error" onClick={addData}>
            +
          </Button>
        </Stack>
      </div>
      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Delete</h4>
        </div>
        {data.map((element, index) => {
          return (
            <div className="data_val">
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <h4>
                <button
                  style={{ border: "none", background: "white" }}
                  onClick={() => removeItem(index)}
                >
                  <DeleteIcon />
                </button>
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
