import React from 'react';
import { Link } from 'react-router-dom';
import "antd/dist/antd.css";


const App: React.FC = () => {
  return (
    <div className="App" >
      <p> POLI BAKES CAKES </p>
      <p>
        <Link to="/add">Add</Link>
      </p>

    </div>
  );
}

export default App;
