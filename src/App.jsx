import { useState, useEffect } from "react";
import Plans from "./Plans";
import './App.css'

function App() {

  const [subjects, setSubjects] = useState([]);

  const [subject, setSubject] = useState("");
  const [hour, setHour] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    let copyArray = [...subjects];
    copyArray.push({
      subject: subject,
      hour: parseInt(hour),
    });

    setSubjects(copyArray);
    setSubject("");
    setHour("");
  };

  const increment = (index) => {
    let copyArray = [...subjects];
    copyArray[index]["hour"] += 1;
    setSubjects(copyArray);
  };

  const decrement = (index) => {
    let copyArray = [...subjects];
    if(copyArray[index]["hour"]>0){
    copyArray[index]["hour"] -= 1;}
    setSubjects(copyArray);
  };

  useEffect(() => {
    if (subjects.length > 0)
      localStorage.setItem("subject", JSON.stringify(subjects));
  }, [subjects]);

  useEffect(() => {
    if (localStorage.getItem("subject")) {
      let array = JSON.parse(localStorage.getItem("subject"));
      setSubjects(array);
    }
  }, []);

  return (
    <div id="main">
      <h1>Education Planner</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          onChange={(e) => setSubject(e.currentTarget.value)}
          type="text"
          placeholder="Subject"
          id="subject"
          value={subject}
        />
        <input
          required
          onChange={(e) => setHour(e.currentTarget.value)}
          type="number"
          placeholder="Hour"
          id="hour"
          value={hour}
        />
        <button id="add">Add</button>
      </form>

      {subjects.map((item, index) => (
        <Plans
          increment={increment}
          decrement={decrement}
          subject={item.subject}
          hour={item.hour}
          index={index}
        />
      ))}
    </div>
  );
}

export default App;