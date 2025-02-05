import React, { useState } from "react";
import HomeNav from "../Components/HomeNav";
import LoginForm from "../Forms/LoginForm";
import SignUpForm from "../Forms/SignupForm";

function SignInPage()
{
    const [showLogin, setShowLogin] = useState(true);

    const displayLogin = () => setShowLogin(true);
    const displaySignup = () => setShowLogin(false);

    return(
        <div className="d-flex">
            <HomeNav />

            <div className="col-md-9 text-light d-flex col justify-content-center align-items-center p-4" 
                    style={{"backgroundImage": "url(https://img.freepik.com/premium-photo/cozy-home-office-with-desk-computer-warm-lighting-vector-illustration-flat-style_1029473-422475.jpg)", 
                    "height": "100vh",
                    "filter": "brightness(.8)",
                    "backgroundPosition": "center", 
                    "backgroundSize": "cover", 
                    "backgroundRepeat": "no-repeat",
                    "overflow": "hidden",
                    "overflowY": "scroll",
                    "flexWrap": "wrap"}}>

                {
                    showLogin
                        ? <LoginForm switchDisplay = {displaySignup} />
                        : <SignUpForm switchDisplay = {displayLogin} />
                }
            </div>
        </div>
    );
}

export default SignInPage;