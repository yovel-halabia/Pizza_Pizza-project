import React from 'react';
import './HomePage.css';




function HomePage(props){

    props.getLocation("home");

    
    return(
        <div>
            <div className="shape">
                <div>
                    <text>“in the love<br/>of pizza”</text>
                </div>

                <div>
                    <a href="/menu">order now</a>  
                </div>
                    
            </div>

            <a className="mbuton" href="/menu">order now</a>

        </div>
       

    

    )
}

export default HomePage;