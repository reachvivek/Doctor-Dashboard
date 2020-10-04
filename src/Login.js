import React from 'react'
import './Login.css'
import Logo from "./images/logos/logo.png" 
import { Button } from '@material-ui/core'
import {auth, provider } from './firebase';
import { actionTypes } from './reducer';
import {useStateValue} from "./StateProvider"

function Login() {

    // eslint-disable-next-line
    const [{user}, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then(result => {dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
        })})
        .catch(error=> alert(error.message));
    };
    
    return (
        <div className="login">
            <div className="login__container">
                <img src={Logo} alt=""/>
                <div className="login__text">
                    <h2>Sign in to Chikitsak</h2>
                </div>

                <Button onClick={signIn} type="submit">
                    Sign in with Google
                </Button>
            </div>
        </div>
    )
}

export default Login
