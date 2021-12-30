import { useRoutes } from 'react-router-dom';
import routes from './router';
import StartPage from './pages/StartPage'
import StudentsList from './pages/StudentsList'



const App = () => {

  const content = useRoutes(routes);

  return (
      {content}
    //   <StudentsList />
    );
}

export default App;

