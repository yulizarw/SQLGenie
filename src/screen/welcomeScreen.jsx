import React, { useState, useEffect } from 'react'

import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//action
import { fetchLogin } from "../store/action/userAction"
export const WelcomeScreen = () => {
    const history =useHistory()
    const user = useSelector((state) => state.userReducers.userLogin);
    const dispatch = useDispatch()
    const [tempSubmit, setTempInput] = useState({
        name: '',
        email: '',
    })
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(fetchLogin(tempSubmit))
        localStorage.setItem('access_token',tempSubmit)
    }
    const userNameInput = (input) => {
        setTempInput({ ...tempSubmit, name: input.target.value })
    }
    const emailInput = (input) => {
        setTempInput({ ...tempSubmit, email: input.target.value })
    }

    if (localStorage.getItem('access_token')){
        history.push('/home')
    }
    console.log(user)
    return (

        <div style={{ backgroundColor: "#E5E5E5", maxHeight: '100%' }}>
            <div className="hold-transition login-page" style={{ backgroundColor: "#E5E5E5" }}>
                <div className="login-box" style={{ width: '400px', height: '371px' }}>
                    <div className="login-logo">
                        {/* <img src={LogoAves} width="300px"></img> */}
                    </div>
                    <div className="card" style={{
                        boxShadow: '0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802)',
                        borderRadius: '8px'
                    }}>
                        <div className="card-body login-card-body" style={{ width: '400px', height: '371px', borderRadius: '8px' }}>
                            <p className="login-box-msg" style={{ fontFamily: 'nunito', padding: '42px', fontStyle: 'normal', position: 'static', fontWeight: '800px', fontSize: '18px', lineHeight: '32px', textAlign: 'center' }}>Welcome to Backy</p>
                            <p style={{ fontSize: '12px', textAlign: 'center' }}>Your best buddy to generate sql in second,<br></br>
                                before i show please fill the email form.</p>
                            <form
                                onSubmit={onSubmit}
                                style={{ margin: '0px 32px' }}
                            >
                                <div className="input-group mb-3" style={{ padding: '0px', justifyContent: 'center', margin: '0px 12px', width: '272px' }}>
                                    <input
                                        required
                                        type="text"
                                        className="form-control input-txt1"
                                        placeholder="Your Name"
                                        style={{ fontFamily: 'Nunito', fontSize: '12px' }}
                                        onChange={userNameInput}
                                    />

                                    <div className="input-group-append" >

                                        <div className="input-group-text">
                                            <span className="fas fa-envelope"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3" style={{ padding: '0px', justifyContent: 'center', margin: '0px 12px', width: '272px' }}>
                                    <input
                                        required
                                        type="email"
                                        className="form-control input-txt1"
                                        placeholder="Email"
                                        style={{ fontFamily: 'Nunito', fontSize: '12px' }}
                                        onChange={emailInput}
                                    />

                                    <div className="input-group-append" >

                                        <div className="input-group-text">
                                            <span className="fas fa-envelope"></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" style={{ justifyContent: 'center', marginTop: '32px' }}>

                                    <div className="col-4">
                                        <button type="submit" className="btn btn-primary btn-block" style={{ justifyContent: 'center', fontFamily: 'Nunito', fontSize: '12px' }}>
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}