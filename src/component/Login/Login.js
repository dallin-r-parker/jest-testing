import React, {Component} from 'react'

export default class Login extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return (
			<form className="login-container">
				<input type="email" placeholder="test@example.com"/>
				<input type="password" placeholder="password"/>
				<button action="submit">Login</button>
			</form>
		)
	}
}