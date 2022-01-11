import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import StartPage from './pages/desktop/StartPage'
import StudentsList from './pages/desktop/StudentsList'
import StudentsListMobile from './pages/mobile/StudentsListMobile'
import StartPageMobile from './pages/mobile/StartPageMobile'
import MenuPage from './pages/desktop/MenuPage'
import MenuPageMobile from './pages/mobile/MenuPageMobile'


const WIDTH_BREAKPOINT = 414

const App = () => {

  const widthWindow =  window.screen.width
  const isDesktop = widthWindow > WIDTH_BREAKPOINT

  return (
    <Router>
      <Routes>
        <Route path='/students' element={ isDesktop ? <StudentsList/> : <StudentsListMobile/>} />

        <Route path='/tensor' element={ isDesktop ? <StartPage/> : <StartPageMobile/>} />
        <Route path='/' element={ isDesktop ? <MenuPage/> : <MenuPageMobile />} />
      </Routes>   
    </Router>
    );
}

export default App;

