import React, {useRef, useState} from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext"
import {Link, useHistory} from "react-router-dom"
export default function Signup() {
    const emailRef=useRef();
    const passwordRef=useRef();
    const passwordConfirmRef=useRef();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history=useHistory()
    async function handleSubmit(e){
        e.preventDefault()
        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Password needs to match")
        }
        try {
            setError("")
            setLoading(true)
            history.push("/")//push an entry in the session's history stack
        }catch{
            setError("Failed to create account.")
        }
        setLoading(false)
    }
    
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center">Sign Up</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required/>
                        </Form.Group>
                        <Form.Group id="password-confirmation">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required/>
                        </Form.Group>
                        <Button type="submit">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="text-center">
                Have you got an account before? Log in here. Commeeeeeeeeeeeeeeeeeeeeeeee
            </div>
        </>
    )
}
