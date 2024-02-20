import HTML from './images/html.png'
import CSS from './images/CSS.png'
import JAVASCRİPT from './images/javascript.png'
import REACT from './images/react.png'
import './Course.css'

const courseMap = {
  HTML: HTML,
  CSS: CSS,
  JAVASCRİPT: JAVASCRİPT,
  REACT: REACT,
  // Key ve Value değerleini birbirine eşitliyoruz sonra aşağıda görüntülüyoruz
}

function Course({ courseName }) {
  console.log(courseName)
  return (
    <div className="CourseDiv">
      <img className="courseİmg" src={courseMap[courseName]} />
    </div>
  )
}

export default Course
