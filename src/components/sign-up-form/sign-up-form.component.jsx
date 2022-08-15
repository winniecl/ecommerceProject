import { useState, useContext } from "react"
//import { UserContext } from '../../contexts/user.context'
import FormInput from '../form-input/form-input.component'
import Button from "../button/button.component"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import { async } from "@firebase/util"
import '../sign-in-form/sign-in-form.styles.scss'

const defaultFormFields ={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const SignUpForm =()=>{
    //const {setCurrentUser}= useContext(UserContext)
    const [formFields, setFormFields]=useState(defaultFormFields)
    const {displayName,email,password,confirmPassword}=formFields
    const handleChange=(event)=>{
        const {name,value}=event.target
        setFormFields({...formFields,[name]:value})
        console.log(formFields)
    }
    const resetFormFields=()=>{
        setFormFields(defaultFormFields)
    }
    const handleSubmit = async(event)=>{
        event.preventDefault();
        if(password!==confirmPassword) {alert('Password do not match');return}
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email,password)
            //const userDocRef = 
            const userDocRef = await createUserDocumentFromAuth(user, {displayName})
            //setCurrentUser(userDocRef)
            resetFormFields()
        } catch(error){
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
              } else {
                console.log('user creation encountered an error', error);
              }
        }
    
        

    }
    //console.log(formFields)
    return(
        <div className="sign-up-container">
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                
                <FormInput label ='Display Name' type = 'text' name = 'displayName' onChange={handleChange} value= {displayName} required/>
                
                <FormInput label ='Email' type = 'email' name = 'email' onChange={handleChange} value= {email} required/>
                
                <FormInput label ='Passwod' type = 'password' name = 'password' onChange={handleChange} value= {password} required/>
                
                <FormInput label ='Confirm Password' type = 'password' name = 'confirmPassword' onChange={handleChange} value= {confirmPassword} required/>
                <Button type='submit' label='Sign up'/>
            </form>
        </div>
    )
}
export default SignUpForm