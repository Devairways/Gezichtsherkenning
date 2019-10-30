import React from 'react';
import Logo from '../logo/logo';

const Navigatie = ({onRouteChange, IngeLogd}) =>{
	if(IngeLogd){
	return(
		<nav style={{display:'flex', justifyContent:'space-between'}}>
		    <Logo/>
			<p onClick= { () =>  onRouteChange('login')} className="f3 link dim black underline pa3 pointer">Uitloggen</p>
		</nav>
		);
      }else{
      return(
      	<nav style={{display:'flex', justifyContent:'space-between'}}>
      	    <Logo/>
      	    <div style={{display:'flex',flexDirection:"row"}}>
      	    	<p onClick= { () =>  onRouteChange('login')} className="f3 link dim black underline pa3 pointer">Log in</p>
	    		<p onClick= { () =>  onRouteChange('registreer')} className="f3 link dim black underline pa3 pointer">Registreer</p>
      	    </div>	
		</nav>
		)
      }
}

export default Navigatie;