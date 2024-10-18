import React from 'react';
import './App.css';
import ReactDom from "react-dom";

function goodJob() {
  alert('Good Job!');
}

function badJob() {
  alert('Bad Job!');
}

interface Props {
  children: any
}

function Center({children}: Props) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'top',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        {children}
      </div>
    );
  }

  const App = () => {
   
    return (
      <Center>
        <span className="font-link">
          <h1>
            Application
          </h1>
          <h4>Thank you for your interest in our Engagement grants. Before you proceed to the application page, 
            please watch the following 2 minute video 
            <a href="https://www.youtube.com/watch?v=CtpdMkKvB6U&ab_channel=Dream" target="_blank" rel="noopener noreferrer">
                <br></br>
                <button> 
                  Link Button 
                </button>
            </a>
          </h4>
            <text>
              I attest that I watched the 2 minute video prior to complete this form.
            </text>
          
              <button onClick={goodJob}> 
                Yes 
              </button>
              <button onClick={badJob}> 
                No 
              </button>
          <br></br>
          <br></br>
            <label>
              Phone
              <input />
            </label>
          <br></br>
            <label>
              Email:
              <input />
            </label>
          <br></br>
            <label>
              Campus:
              <select>
                <option value="Campus1">College1</option>
                <option value="Campus2">College2</option>
                <option selected value ="Purdue">
                  Purdue
                </option>
                <option value="Campus4">College4</option>
              </select>
            </label>
          <br></br>
            <label>
              College
              <select>
                <option value="College1">College1</option>
                <option value="College2">College2</option>
                <option selected value ="Purdue">
                  Purdue
                </option>
                <option value="College4">College4</option>
              </select>
            </label>
          <br></br>
            <label>
              Major/Department:
              <select>
                <option value="Major1">College1</option>
                <option value="Major2">College2</option>
                <option selected value ="Business">
                  Purdue
                </option>
                <option value="Major4">College4</option>
              </select>
            </label>
          <br></br>
            <label>
              Classification:
              <select>
                <option value="What">College1</option>
                <option value="Does">College2</option>
                <option selected value ="This">
                  Purdue
                </option>
                <option value="Mean">College4</option>
              </select>
            </label>
          <br></br>
          <br></br>
            <text>
              IS this request being made by an individual or by a group?!!!!!!!!!!!!!!!!!!!!!!!!!!!
            </text>
              <button onClick={goodJob}> 
                Individual 
              </button>
              <button onClick={badJob}> 
                Group 
              </button>
          <br></br>
          <br></br>
            <label>
              Group Members:
                <text> 
                  Name, email, college (Example: Kayla Vasilko, vasilko@purdue.edu, Engineer)  
                </text>
                <br></br>
                <br></br>
                  <textarea></textarea>
                

            </label>
        </span>
        </Center>
    );
  };

  ReactDom.render(<App />, document.querySelector("#root"));
  
  export default App;