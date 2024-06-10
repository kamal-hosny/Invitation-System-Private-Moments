import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../pages/dashboard/Login';
import Dashboard from '../pages/dashboard/Dashboard';
import Invitation from '../pages/user-interface/Invitation';
import '../index.css';


function App() {
    const Routing = createBrowserRouter([
        {
            path: "/", 
            children: [
                {index: true, element: <Home />},
                {path: "system/administrator/dashboard", element: <Dashboard />},
                {path: "system/administrator/login", element: <Login />},
                {path: "invitation", element: <Invitation />},
            ]
        }
    ]);

    return (
        <>
            <RouterProvider router={Routing} />
        </>
    );
}

export default App;
