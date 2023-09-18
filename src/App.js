import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addName } from './reducers/nameReducer';
import { useState } from 'react';
import { addColor } from './reducers/colorReducer';

function App() {
const person = useSelector((state) => state.person)
const color = useSelector((state) => state.color)

const [userName, setUserName] = useState("");
const [userAge, setUserAge] = useState("")
const [backColor, setBackColor] = useState(color.color)

const dispatch = useDispatch()


  const nameHandler = (e) => {
    e.preventDefault()
    dispatch(addName({ name:userName, age: userAge}))
    setUserName("")
    setUserAge("")
  }
  const colorHandler = (e) => {
    setBackColor(e.target.value)
    dispatch(addColor({color: backColor}))
  }

const styles = {
  backgroundColor: backColor
}
  return (
    <div className="App" style={styles}>
        <p>{person.name}</p>
        <p>{person.age}</p>
    <form>
        <input onChange={e => setUserName(e.target.value)} type='text' value={userName} placeholder='name'/>
        <input onChange={e => setUserAge(e.target.value)} type='text' value={userAge} placeholder='age'/>
        <button onClick={e => nameHandler(e)}>change name</button>
        <label style={{backgroundColor: "white"}}>Select new background color:</label>
        <select onChange={e => colorHandler(e)} value={backColor}>
              <option>green</option>
              <option>yellow</option>
              <option>red</option>
              <option>lightblue</option>
        </select>
    </form>
        
    </div>
  );
}

export default App;
