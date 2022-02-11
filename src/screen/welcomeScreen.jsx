import React from 'react'

import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const WelcomeScreen = () => {
    return (
        <div style={{ backgroundColor: "#E5E5E5", maxHeight: '100%' }}>
            <div className="hold-transition login-page" style={{ backgroundColor: "#E5E5E5" }}>
                <div className="login-box">
                    <div className="login-logo">
                        {/* <img src={LogoAves} width="300px"></img> */}
                    </div>
                    <div className="card" style={{boxShadow: '0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802)',
borderRadius: '8px'}}>
                        <div className="card-body login-card-body">
                            <p className="login-box-msg" style={{ fontFamily: 'nunito', fontStyle: 'normal', position: 'static', height: '90px', fontWeight: '600px', fontSize: '18px', lineHeight: '32px', textAlign: 'center' }}>Welcome to Backy</p>
                            <p>Your best buddy to generate sql in second,
                                before i show please fill the email form.</p>
                            <form
                            // onSubmit={onSubmit}
                            >
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nama Pengguna"
                                    // onChange={userNameInput}
                                    />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Kata Sandi"
                                    // onChange={passwordInput}
                                    />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Masuk sebagai</label>
                                    {/* <select className="form-control" onChange={roleInput}>
                                        <option>Pilih peran</option>
                                        <option value="admin">Admin</option>
                                        <option value="farmer">Peternak</option>
                                    </select> */}
                                </div>
                                <div className="row">
                                    <div className="col-8">

                                    </div>
                                    <div className="col-4">
                                        <button type="submit" className="btn btn-primary btn-block">
                                            Masuk
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <p>Belum punya akun?</p>
                            <button className="btn btn-default"
                            //  onClick={registerUser}
                            >Daftar</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}