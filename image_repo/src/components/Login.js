import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext"
import {Link, useHistory} from "react-router-dom"
import {AuthContext} from "../contexts/AuthContext.js"
export default function Login() {
    const emailRef=useRef();
    const passwordRef=useRef();
    const [error, setError] = useState("")
    const {login} =useAuth()
    const [loading, setLoading] = useState(false)
    const history=useHistory()
    async function handleSubmit(e){
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")//push an entry in the session's history stack
        }catch{
            setError("Failed to login.")
            //Make this into a separate error message later
        }
        setLoading(false)
    }
    
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4" >Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required/>
                        </Form.Group>
                        <div className="w-100 text-center mt-3"><Link to="/forgot-password">Forgot Password?</Link></div>
                        <Button classname="w-100" disabled={loading} type="submit">Log In</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div  className="w-100 text-center mt-2" >
                Sign up over <Link to="/signup">here</Link>.
            </div>
        </>
    )
}

