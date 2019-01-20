import React from 'react';

const Registreer = ({onRouteChange}) =>{
	return (
		<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l shadow-3 mw6 center">
			<main className="pa4 black-80">
			  <div className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f1 fw6 ph0 mh0">Registreer</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="naam">Naam</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="naam"  id="naam"/>
			      </div>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Wachtwoord</label>
			        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
			      </div>
			    </fieldset>
			    <div className="">
			      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" onClick={()=> onRouteChange("login")}value="Registreer"/>
			    </div>
			  </div>
			</main>
		</article>

		);
}

export default Registreer;