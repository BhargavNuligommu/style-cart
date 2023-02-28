import { useState} from "react";

import {createUserDocumentFromAuth, signInWithGooglePopup,signInUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import Button from "../button-component/button-component";
import FormInput from "../form-input/form-input.component";

import './sign-in.styles.scss'


const defaultFormFields = {

    email : '',
    password: ''
}


const SignIn = () => {

    const [formFields,setFormFields] = useState(defaultFormFields);

    const {email,password} = formFields;

    console.log(formFields);

    const resetFormFields= () => {

        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {

        event.preventDefault();


       

        try {

            const response = await signInUserWithEmailAndPassword(email,password);
            console.log(response);

            
            resetFormFields();

        }catch(error){

            if(error.code === 'auth/wrong-password'){
                alert('incorrect password for email');

            }
            else if(error.code === 'auth/user-not-found'){
                alert('User is not registered');
            }
            else{
                console.log('error',error);
            }

        }






    }

    const handleChange = (event) => {
        const {name,value} = event.target;

        setFormFields({...formFields, [name] : value});
    };

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();

        const userDocRef = await createUserDocumentFromAuth(user);

        console.log(userDocRef);

    }

    return (
        <div className="sign-in-container">
        <h2>Already have an account?</h2>
        <span>Sign In with your email and password</span>
        <form onSubmit={handleSubmit}>
        

        
        <FormInput label='Email' type='email' required onChange={handleChange} name="email" value={email} />
        
        
        <FormInput label='Password' type='password' required onChange={handleChange} name="password" value={password}/>

        <div className="buttons-container">
        <Button type="submit">Sign In</Button>
        <Button type="button" buttonType='google' onClick={logGoogleUser}>Google Sign-in</Button>

        </div>    

        </form>
        </div>
    );
}

export default SignIn;