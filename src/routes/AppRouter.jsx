import { RouterProvider, createBrowserRouter } from 'react-router-dom';


import Home from '../components/Home';


function App() {
    const Routing = createBrowserRouter([
        {
            path: "/", 
            children: [
                {index:true, element: <Home />}
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
