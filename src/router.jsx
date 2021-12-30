import { Suspense, lazy } from 'react'

//Изменить Loader

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );


const StartPage = Loader(lazy(() => import('./pages/StartPage')))
const StudentsList = Loader(lazy(() => import('./pages/StudentsList')))


const routes = [
    {
      path: '*',
      element: <StartPage />,
      children: []
    }
  ];

export default routes;
