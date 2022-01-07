import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import StartPage from './pages/StartPage'
import StudentsList from './pages/StudentsList'
import StudentsListMobile from './pages/StudentsListMobile'
import StartPageMobile from './pages/StartPageMobile'

const WIDTH_BREAKPOINT = 414

const App = () => {

  const widthWindow =  window.screen.width
  const isDesktop = (widthWindow > WIDTH_BREAKPOINT) ? true : false

  return (
    <Router>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Tensor</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
        </ul>
      </nav> */}
      <Routes>
        <Route path='/students' element={ isDesktop ? <StudentsList/> : <StudentsListMobile/>} />

        <Route path='/' element={ isDesktop ? <StartPage/> : <StartPageMobile/>} />
      </Routes>
    </Router>
    );
}

export default App;

