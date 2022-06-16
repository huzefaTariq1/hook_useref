
import { useState } from 'react';
import { useRef } from 'react';
import './App.css';

function App() {
  const name = useRef();
  const date = useRef();
  const [Location, setLocation] = useState("karachi")

  const submit = (e) => {
    e.preventDefault()
    console.log(name.current.value)
    console.log(date.current.value)
    console.log(Location);
  }
  return (
    <>
      <form onSubmit={submit}>
        <label>
          Name: <input type={"text"} ref={name} />
        </label>
        <br />
        <br />
        <label>
          Date : <input type={"date"} ref={date} />
        </label>

        <br />
        <br />
        <label>
          Location  <select onChange={(e) => setLocation(e.target.value)}>
            <option value="karachi">Karachi</option>
            <option value="lahore">lahore</option>
            <option value="Abbottabad">Abbottabad</option>

          </select>
        </label>

        <br />
        <br />
        <button type={"submit"}>submit</button>
      </form>
    </>
  );
}

export default App;
