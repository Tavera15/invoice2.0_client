import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import { useDispatch } from 'react-redux';
import { userSignup } from "../Features/TokenSlice";
import { useNavigate } from "react-router-dom";

function SignUpForm({switchDisplay})
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    async function onSignup(e)
    {
        e.preventDefault();

        if(password === confirmPassword)
        {
            const data = {
                name: name,
                email: email,
                password: confirmPassword
            }

            await dispatch(userSignup(data));
            navigate("/Account/Dashboard");
        }
        else
        {
            alert("Passwords do not match");
        }
    }

    return(
        <div className="col-md-4 mt-md-0 p-4 border bg-dark">
            <h1>Sign up</h1>
            <hr/>
            <Form onSubmit={(e) => onSignup(e)}>
                <div className="mb-3">
                    <label htmlFor="signup-name" className="form-label">Name</label>
                    <input required onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="signup-name"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="signup-email" className="form-label">Email address</label>
                    <input required onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="signup-email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="signup-password" className="form-label">Password</label>
                    <input required onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="signup-password" />
                </div>
                <div className="mb-3">
                    <label htmlFor="signup-confirm-password" className="form-label">Confirm Password</label>
                    <input required onChange={(e) => setConfirmPassword(e.target.value)} type="password" className="form-control" id="signup-confirm-password" />
                </div>
                <Button type="submit" variant="outline-light">Register</Button>
            </Form>

            <p role="button" className="mt-4 pointer" onClick={() => switchDisplay()}>Already have an account? <span className="text-decoration-underline">Sign in</span></p>
        </div>
    );
}

export default SignUpForm;