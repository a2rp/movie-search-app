import React from 'react'
import MovieSearchApp from './movieSearchApp/MovieSearchApp'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <div>
            <MovieSearchApp />
            <ToastContainer />
        </div>
    )
}

export default App

