import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitted, setSubmitted] = useState(false);
  const [resultData, setResultData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const handleSubmit = () => {
    setSubmitted(true);
    if (formData.email && formData.message && formData.name) {
      setErrorMessage('');
      setResultData(formData);
      setFormData({
        name: "",
        email: "",
        message: ""
      })
    } else {
      setErrorMessage("All fields are required");
      setResultData({
        name: "",
        email: "",
        message: ""
      });
    }
  }
  return (
    <div className="App">
      <div className="card" style={{ width: '20rem' }}>
        <div className="card-body">
          <h5 className="card-title">Contact Form</h5>
          <div className="mb-3">
            <label
              htmlFor="name"
              className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={(event) => setFormData({
                ...formData,
                name: event.target.value
              })} />
          </div>

          <div className="mb-3">
            <label
              htmlFor="email"
              className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={(event) => setFormData({
                ...formData,
                email: event.target.value
              })} />
          </div>

          <div className="mb-3">
            <label
              htmlFor="message"
              className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              value={formData.message}
              onChange={(event) => setFormData({
                ...formData,
                message: event.target.value
              })} />
          </div>
          <div className='d-flex justify-content-end'>
            <button
              type="button"
              className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          {
            isSubmitted && <>
              {errorMessage ? <div>
                <p className='text-danger'><strong>{errorMessage}</strong></p>
              </div> :
                <div>
                  <p><strong>Name: </strong>{resultData.name}</p>
                  <p><strong>Email: </strong>{resultData.email}</p>
                  <p><strong>Message: </strong>{resultData.message}</p>
                </div>
              }
            </>
          }

        </div>
      </div>
    </div>
  );
}

export default App;
