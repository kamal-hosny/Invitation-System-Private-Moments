import { RouterProvider, createBrowserRouter } from 'react-router-dom';


import Home from '../components/Home';
import Login from '../pages/dashboard/Login';
import Dashboard from '../pages/dashboard/Dashboard';
import Invitation from '../pages/user-interface/Invitation';


function App() {
    const Routing = createBrowserRouter([
        {
            path: "/", 
            children: [
                {index:true, element: <Home />},
                {index:"/system/administrator/dashboard", element: <Dashboard />},
                {index:"/system/administrator/login", element: <Login />},

                {index:"/invitation", element: <Invitation />},
                
            ]
        }
    ])

  return (
    <>
    <RouterProvider router={Routing} />
    </>
  )
}

export default App
