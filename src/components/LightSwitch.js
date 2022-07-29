import { useState } from 'react';

function LightSwitch(){

  const [lightSwitch, setLightSwitch] = useState(false);

  function handleTurnOn(e){
    e.preventDefault()
    setLightSwitch(true)
  }
  function handleTurnOff(e){
    e.preventDefault()
    setLightSwitch(false)
  }

    return(
        //this is another format of an if statement (? means if true, : means if false. See below for commented out. The other format is correct but the ? : method is preferable here)
      <div className="container">
      <h1>{lightSwitch ? "💡" : ""}</h1>

          {lightSwitch ?
          <div className="buttonContainer ">
            <button className="turnOn disabled">ON</button>
            <button className="turnOff" onClick={handleTurnOff}>OFF</button>
            </div>
          :
            <div className="buttonContainer">
            <button className="turnOn" onClick={handleTurnOn}> ON</button>
            <button className="turnOff disabled"> OFF</button></div>
          }
      </div>
      );
      /*if(lightSwitch){
      return (
        <div>
        <p>The light switch is on</p>
        </div>
      )
    } else {
      return (
      <div>
      <p>The light switch is off</p>
      </div>
      )
    }*/
}

export default LightSwitch;
