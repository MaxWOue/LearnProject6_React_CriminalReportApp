import {useState} from 'react';

export default function App() {
  const [name, set_name] = useState('');
  const [pic, set_pic] = useState('');
  const[location, set_location] = useState('');
  const[crime, set_crime] = useState('');
  const[isArmed,set_isArmed] = useState(false);
  const[isPriorHistory,set_isPriorHistory] = useState(false);
  const[isPreviewing,set_isPreviewing] = useState(false);
  function handleChangeName(e){
    set_name(e);
  }
  function handleChangeLocation(e){
    set_location(e);
  }
  function handleChangeImage(e){
    set_pic(e);
  }
  function handleChangeCrime(e){
    set_crime(e);
  }
  function handleToggle_isArmed(e){
    set_isArmed(e);
  }
  function handleToggle_isPriorHistory(e){
    set_isPriorHistory(e);
  }
  function handleReportCriminal(){
    alert("Thank you for reporting " + name + " to the authorities. We will make sure that " + name + " gets arrested.");
  }
  function handleToggle_isPreviewing(){
    set_isPreviewing(!isPreviewing);
  }
  function testfunc(){
    <h2>Previewing</h2>
  }
  function testfunc2(){
    <h2>Not Previewing</h2>
  }
  return (
    <>
      <div>
        <h1>Report a Criminal</h1>
        <label>
          Name: <input onChange={handleChangeName} />
        </label><p></p>
        <label>
          Location: <input onChange={handleChangeLocation} />
        </label><p></p>
        <label>
          Image URL: <input onChange={handleChangeImage} />
        </label><p></p>
        <label>
          Crime: <input onChange={handleChangeCrime} />
        </label><p></p>
        <label>
          <input type="checkbox" checked={isArmed} onChange={handleToggle_isArmed} /> Criminal is armed
        </label><p></p>
        <label>
          <input type="checkbox" checked={isPriorHistory} onChange={handleToggle_isPriorHistory} /> Criminal is has a prior history
        </label>
        <p></p>
        <button onClick={handleToggle_isPreviewing}>Preview criminal</button>
      </div>
    </>
  );
}

//<button onClick={() => <previewCriminal />}>Preview criminal</button>