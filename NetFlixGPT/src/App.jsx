import Body from './components/Body';
// import "../src/index.css";
import Login from '../src/components/Login';
import Browse from '../src/components/Browse';
import './index.css';
import { Provider } from 'react-redux';
import appStore from './utils/redux/appStore';
import { createBrowserRouter } from 'react-router-dom';
import Movie from './components/Movie/Movie';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/browse',
        element: <Browse />,
      },
      {
        path: '/movie/:movieId',
        element: <Movie />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default appRouter;
