import React from 'react'
import {shallow} from 'enzyme'
import Login from './Login'

test('has css class login-container', () => {
	shallow(<Login/>).hasClass('login-container')
})