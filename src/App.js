import './App.css'
import Course from './Course'
import { useState } from 'react'

function getRandomCourse() {
  const courseArray = ['HTML', 'CSS', 'JAVASCRİPT', 'REACT']
  return courseArray[Math.floor(Math.random() * courseArray.length)]
}

function App() {
  const [courses, setCourses] = useState([])

  const handleClick = () => {
    setCourses([...courses, getRandomCourse()])
    // ... daha öncekiler geçerli demek yani butona bastık CSS çıktı bidaha bastığımızda CSSin kaybolmaması için ...courses dememiz gerekli
  }
  const courseList = courses.map((course, index) => {
    return <Course key={index} courseName={course} />
  })

  return (
    <div className="App">
      <button onClick={handleClick}>Yazılım Dili Ekle</button>

      <div>{courseList}</div>
    </div>
  )
}

export default App
