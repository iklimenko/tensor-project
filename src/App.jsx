import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import StartPage from './pages/StartPage'
import StudentsList from './pages/StudentsList'



const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Tensor</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/students' element={<StudentsList/>} />

        <Route path='/' element={<StartPage/>} />
      </Routes>
    </Router>
    );
}

export default App;

