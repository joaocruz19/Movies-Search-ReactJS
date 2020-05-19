import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import SearchForm from '../components/SearchForm';

function App(props) {
    return (
        <div className="app p-3">
            <SearchForm />
        </div>
    )
}

export default App;
