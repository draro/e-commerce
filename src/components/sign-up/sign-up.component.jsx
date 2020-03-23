import React from 'react';
import './sign-up.style.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

class SignUp extends React.Component {
    constructor(props){
        super(props)

        this.state = { 
            displayName: '',
            email:'',
            password: '',
            confirmPassword: ''
        }
    }
    
    handleSubmit = async event => {
        event.preventDefault()

        const { displayName, email, password,confirmPassword} = this.state

        if (password !== confirmPassword) {
            alert("Password don't match")
            return
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName})
            this.setState({ 
                displayName: '',
                email:'',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.error(error)
        }
    }
    handleChange = event => {
        const {value, name} = event.target
        this.setState({[name]: value})
    }
    render(){
        const { displayName, email, password,confirmPassword} = this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput name='displayName' value={displayName} type='text' required handleChange={this.handleChange}  label='Display Name'/>
                <FormInput name='email' value={email} type='email' required handleChange={this.handleChange}  label='E-mail'/>
                <FormInput name='password' value={password} type='password' required handleChange={this.handleChange}  label='Password'/>
                <FormInput name='confirmPassword' value={confirmPassword} type='password' required handleChange={this.handleChange}  label='Confirm Password'/>
                <div className='buttons'>
                <CustomButton type='submit'>Sign Up</CustomButton>
                </div>
                </form>
            </div>
        )
    }
}
export default SignUp