import React from 'react';
import './styles/Error404.css';
import { Link } from 'react-router-dom';


function Home() {

    return (
        <div className="base center-center">
            <div>
                <p className="text-white ">
                    <span className="display-3 font-weight-bold">
                        404
                    </span>
                    <span className="h1 font-weight-bold">
                        Page Not Found
                    </span>
                </p>

                <p className="text-white h4"> 
                    Heee...   Houston, we have a problem.
                </p>
                <p className="text-white">
                    Do you not find the base? Don't worry we can help you!
                </p>
                <Link to="/badges/new" className="btn btn-primary">Go back to the base</Link>
            </div>
        </div>
    )
    
}

export default Home;