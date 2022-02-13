import React, { useState, useEffect } from 'react'

import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//action

import logo from '../assets/icons/fi-rr-database.png'
export const uiScreen = () => {
    const templateDropDown = [
        {
            text:'Name - Varchar - 10'
        },
        {
            text:'Name - Varchar - 20'
        },
        {
            text:'Namban'
        },
    ]
    return (
        <>
            <div style={{ backgroundColor: "#E5E5E5", maxHeight: '100%' }}>
                <div className="hold-transition login-page" style={{ backgroundColor: "#E5E5E5" }}>
                    <h1 style={{
                        position: 'absolute', top: '10.25%',
                        fontFamily: 'Nunito',
                        lineHeight: '27px',
                        fontSize: '20px',
                        fontWeight: '700',
                        fontStyle: 'normal'
                    }}>
                        HI, Anton
                    </h1>
                    <form style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        padding: '0px',
                        width: '210px',
                        height: '86px',
                        left: '615px',
                        marginTop: 'calc(50% - 86px/2 - 43px)',
                        marginBottom: '50%',
                        marginLeft: '42.7%',
                        marginRight: '42.7%'
                    }}>

                        <p style={{
                            display: 'flex',

                            top: '8px', left: '8px',
                            lineHeight: '16.37px',
                            fontStyle: 'normal',
                            width: '100px',
                            fontSize: '12px',
                            marginBottom: '10px',
                            justifyContent: 'center',
                            padding: '8px',
                            color: '#353535'
                        }}>
                            Column Name
                        </p>


                        <div className="input-group mb-3" style={{ padding: '0px', justifyContent: 'center', width: '210px', height: '44px' }}>

                            <div className="input-group-text" style={{
                                width: '44px',
                                borderRight: '0px',
                                backgroundColor: 'white',
                                justifyContent: 'center',
                                border: '0'
                            }}>
                                <img src={logo} alt="Canvas Logo" style={{ size: '16px', backgroundColor: 'white' }} />
                            </div>

                            <input type="text"
                                className="form-control input-txt1"
                                placeholder="Write your field name"
                                style={{
                                    fontFamily: 'Nunito',
                                    fontSize: '12px',
                                    width: '166px',
                                    height: '44px',
                                    top: '42px',
                                    position: 'static',
                                    paddingTop: '14px',
                                    paddingBottom: '14px',
                                    paddingRight: '21px',
                                    paddingLeft: '26px',
                                    border: '0'
                                }}></input>


                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}