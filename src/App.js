import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleItemList = () => {
    if (input) {
      setList([...list, input]);
      setInput("");
    }
  }

  return (
    <div>
      <div className='d-flex justify-content-center'>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Item List Manager</h5>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Item Name</label>
              <input 
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Item Name"
                value={input}
                onChange={(event) => setInput(event.target.value)}/>
            </div>
            <button className='btn btn-primary' onClick={handleItemList}>Add Item</button>

            <div>
              <ul>
                {
                  list.map((item) => <li>{item}</li>)
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
