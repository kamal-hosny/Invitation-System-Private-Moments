import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from '../pages/dashboard/Login';
import Dashboard from '../pages/dashboard/Dashboard';
import '../index.css';
import Layout from '../components/layout/Layout';
import { AllStateProvider } from '../context/AllStateContext';
import History from '../pages/dashboard/History';
import Category from '../pages/dashboard/Category';
import ErrorPage from '../pages/ErrorPage';

function App() {
    const Routing = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
            errorElement: <ErrorPage />,
        },
        {
            path: "system/administrator",
            element: <Layout />,
            children: [
                { index: true, element: <Dashboard /> },
                { path: "dashboard", element: <Dashboard /> },
                { path: "history", element: <History /> },
                { path: "category/:slug", element: <Category /> },
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
