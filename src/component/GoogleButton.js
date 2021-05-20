import React from 'react'
import GoogleLogin from 'react-google-login';

function GoogleButton(props) {
    const {onSuccess, onFailure} = props
   
    return (
        <div>
            <GoogleLogin
                clientId="394151390202-ropeusm776uph5n41gb00091cfoohblg.apps.googleusercontent.com"
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}




export default GoogleButton