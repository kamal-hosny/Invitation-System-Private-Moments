import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../pages/dashboard/Login';
import Dashboard from '../pages/dashboard/Dashboard';
import Invitation from '../pages/user-interface/Invitation';
import '../index.css';
import Layout from '../components/layout/Layout';
import { AllStateProvider } from '../context/AllStateContext';
import History from '../pages/dashboard/History';
import Category from '../pages/dashboard/Category';



function App() {
    const Routing = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                { index: true, element: <Home /> },
                { path: "system/administrator/dashboard", element: <Dashboard /> },
                { path: "system/administrator/history", element: <History /> },
                { path: "system/administrator/category/:slug", element: <Category /> },
            ]
        },
        {
            path: "system/administrator/login",
            element: <Login />
        }
    ]);

    return (
        <AllStateProvider>
        <RouterProvider router={Routing} />
        </AllStateProvider>
    );
}

export default App;
