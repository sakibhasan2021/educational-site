import React from 'react';
import { useHistory } from 'react-router';
import './NotFound.css';
const Notfound = () => {
    let back=useHistory();
    const backHomePage=() => {
        back.push('/');
    }
    return (
        <div >
            {/* <h1 ><span id="first-four">4</span><span id="zero">0</span><span>4</span></h1> */}
            
            <div className="notfound-container">
                    <h1 className="first">4</h1>
                     <h1 className="second">0</h1>
                    <h1 className="third">4</h1>
            </div>
            <div className="text">
                <h1 id="first-heading">Page <span>Not Found</span>  </h1>

            </div>
            <button onClick={backHomePage} className="back-Home-Btn">Back Home</button>
        </div>
    );
};

export default Notfound;