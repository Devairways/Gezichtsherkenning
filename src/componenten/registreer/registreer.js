import React from 'react';

class Registreer extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			naam:"",
			email:'',
			password:''
		}
	}
    onNameChange = (event)=>{
		this.setState({naam: event.target.value})
	}
    onEmailChange = (event)=>{
		this.setState({email: event.target.value})
	}
	onPasswordChange = (event)=>{
		this.setState({password: event.target.value})
	}
    onButtonSubmit = () => {
		fetch('https://floating-reef-84982.herokuapp.com/registreer',{
			method:'post',
			headers: {'Content-type': 'application/json'},
			body: JSON.stringify({
				email:this.state.email,
				password:this.state.password,//veranderen later!!
				naam: this.state.naam
			})
	})
		.then(response => response.json())
		.then(gebruiker =>{
			if (gebruiker.id){
				this.props.laadGebruiker(gebruiker)
			    this.props.onRouteChange('home');
			}
		})
	}

	render(){
	return (
		<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l shadow-3 mw6 center">
			<main className="pa4 black-80">
			  <div className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f1 fw6 ph0 mh0">Registreer</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="naam">Naam</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange= {this.onNameChange} type="text" name="naam"  id="naam"/>
			      </div>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange= {this.onEmailChange} type="email" name="email-address"  id="email-address"/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Wachtwoord</label>
			        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange= {this.onPasswordChange} type="password" name="password"  id="password"/>
			      </div>
			    </fieldset>
			    <div className="">
			      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" onClick={this.onButtonSubmit}value="Registreer"/>
			    </div>
			  </div>
			</main>
		</article>

		);
   }
}

export default Registreer;