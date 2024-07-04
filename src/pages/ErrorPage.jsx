import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom' 
const ErrorPage = () => {
    const error = useRouteError()
    const navigate = useNavigate();
  return (
    <div>
        <div>Oops!</div>
        <p>Sorry, an unexpected error has occurred.</p>
        <div><i>{error.statusText || error.message}</i></div>
        <button>
            <a href="/" onClick={()=>navigate("/", { replace: true })}>Back</a>
        </button>
    </div>
  )
}

export default ErrorPage