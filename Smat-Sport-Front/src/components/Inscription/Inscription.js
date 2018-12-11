import React from "react";
import {withRouter} from 'react-router-dom';
import './inscriptionStyle.css';
function Inscription(props) {

    return (
        <div className="grid">

            <div className="login-form">
                <h3 className="title">Login</h3>
                <input type="text" placeholder=" Username " className="input" />
                <input type="text" placeholder=" Password" className="input" />
                <div className="form-foot">
                    <div > <input type="radio" name="" id="save" /> <label for="save">stay connected</label></div>
                    <a href="#">forgot password ?</a>
                </div>

                <input type="submit" value="se connecter" className="submit" />

                <div className="line">
                    <hr></hr>
                    <div className="cercle">OR</div>
                </div>
                <div className="btn-group" >
                    <button className="btn-log fb"> <i className="fa fa-facebook"></i> facebook</button>
                    <button className="btn-log twit"> <i className="fa fa-twitter"></i> twitter</button>
                    <p>
                        You do not have an account ? <a href="#">Signup</a></p>
                </div>
            </div>

        </div>
        





    )
};

export default withRouter(Inscription);