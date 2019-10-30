import React from 'react';

const Rank = ({naam, entries}) => {
	return (
		<div>
			<div className='white f3'>
			    <p>{`${naam} , Jouw huidig aantal foto's gedetecteerd is...`}</p>
			 </div>
      <div className='white f1 '>
        <p>{entries}</p>
      </div>

		</div>
		);
}

export default Rank;