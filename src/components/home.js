// import React, { Component } from 'react';
// //import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
// import './home.css';
// class Home extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Welcome to Your Expense Tracker</h1>
//                 <div>
//                     {/* <Link to="/add-expense"> */}
//                         <button>Add Expense</button>
//                     {/* </Link>
//                     <Link to="/expense-tracker"> */}
//                         <button>Expense Tracker</button>
//                     {/* </Link> */}
//                 </div>
//             </div>
//         );
//     }
// }

// export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <div>
            <h1>Expense Tracker</h1>
            <p>
                
            </p>
            <div className="button-container">
                <Link to="/login" className="button-link">Login</Link>
                <span className="button-space"></span>
                <Link to="/signup" className="button-link">Signup</Link>
            </div>
        </div>
    );
};

export default Home;


