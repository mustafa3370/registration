import './App.css';
import Registration from './components/registration/Registration';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Error from './components/Error/Error';
const Router = createBrowserRouter([
  {path:'/',element:<Layout/>,children:[
      { path: "", element: <Registration/>},
      { path: "Registration", element: <Registration/>},
      { path: "*", element: <Error/>}
  ]},
  ])
function App() {
  return <>
<RouterProvider router={Router}/>
  </>;
}

export default App;
