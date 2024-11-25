import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from './Component/Home';
import Help from './Component/Help';
import Contact from './Component/Contact';
import Mobile from './Component/Mobile';
import Navbar from './Component/Navbar';

function App() {
  
const route = createBrowserRouter(
  [
    {
      path:"/",
      element:<>
      <Navbar/>
      <Home/>
      </>
     
    },
    {
      path:"/Help",
      element:
      <>
      <Navbar/>
      <Help/>
      </>,
      children:[
        {
          path:"Mobile",
          element: <>
          <Mobile/>
          </>,
        }
      ]
    },
    {
      path:"/Contact",
      element: <>
      <Navbar/>
      <Contact/>
      </>,
    }
  ]
)
  return (
    <>
     <RouterProvider router = {route}/>
    </>
  )
}

export default App
