import React from 'react';
import './gezichtdetect.css';

const Gezichtdetect = ({imgUrl, box}) =>{
	return(
		<div className="center  ma">
		    <div className='absolute mt2'>
			   <img id='inputimg'alt="" src={imgUrl} width='500px'/>
			   <div className="bounding-box" style={{top: box.topRow, bottom: box.bottomRow, left: box.leftCol, right: box.rightCol}}></div>
			</div>
		</div>

		);
}

export default Gezichtdetect;