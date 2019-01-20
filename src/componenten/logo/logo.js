import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import Brain from './brain.png';

const Logo = () =>{
	return(
		<div className="ma4 mt0">
			<Tilt className="Tilt  ma4 br2 shadow-2" options={{ max : 25 }} style={{  width: 250 }} >
             <div className="Tilt-inner pa3"> <img style={{paddingTop: '10px'}}alt='logo' src={Brain}/> </div>
            </Tilt>
		</div>
		);
}

export default Logo;