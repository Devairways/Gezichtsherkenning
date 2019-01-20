import React from 'react';

const UrlFormulier = ({onInputChange, onButtonSubmit}) =>{
	return (
		<div className='f3'>
			<p>{'Het magische Brein zal gezichten voor je detecteren, Probeer maar uit!!'}</p>
			<div className="center">
			   <div className='form center br3 shadow-5 pa4'>
				  <input className='f4 pa2 w-70 center'type="text" onChange={onInputChange}/>
				  <button className='w-340 grow f4 link ph3 pv2 dib white bg-light-blue' onClick={onButtonSubmit}>Detecteer</button>
			   </div>
			</div>
		</div>
		);
}

export default UrlFormulier;