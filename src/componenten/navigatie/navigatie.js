import React from 'react';

const Navigatie = ({onRouteChange, IngeLogd}) =>{
	if(IngeLogd){
	return(
		<nav style={{display:'flex', justifyContent:'flex-end'}}>
			<p onClick= { () =>  onRouteChange('login')} className="f3 link dim black underline pa3 pointer">Uitloggen</p>
		</nav>
		);
      }else{
      return(
      	<nav style={{display:'flex', justifyContent:'flex-end'}}>
			<p onClick= { () =>  onRouteChange('login')} className="f3 link dim black underline pa3 pointer">Log in</p>
			<p onClick= { () =>  onRouteChange('registreer')} className="f3 link dim black underline pa3 pointer">Registreer</p>
		</nav>
		)
      }
}

export default Navigatie;