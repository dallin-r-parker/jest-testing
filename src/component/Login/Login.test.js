import React from 'react'
import {shallow} from 'enzyme'
import Login from './Login'

describe('Login Component', () => {
	
	test('has css class login-container', () => {
		shallow(<Login/>).hasClass('login-container')
	})

	test('has input type of email', () => {
		let login = shallow(<Login/>)
		expect(login.find('input').first().props().type).toBe('email')
	})

	test('has input type of password', () => {
		let login = shallow(<Login/>)
		expect(login.find('input').last().props().type).toBe('password')
	})

	test('has a button with submit action', () => {
		let login = shallow(<Login/>)
		expect(login.find('button').props().action).toBe('submit')
	})


})
