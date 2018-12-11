import React from "react";
import img from './RES/LOGO-white.png';
import { Link, Router } from 'react-router-dom'
import img1 from './RES/menu-icon.png';
import withheaderstyle from './WithheaderStyle';

function Header(props) {
    const { className } = props;
    return (
        <div className={className}>
            <div className="header">
                <div className="logo">
                    <img className="logo-img" src={img} alt="Smart sport" />
                </div>
                <div><label for="check"><img className="menu-icon display " src={img1} alt="menu" /></label>
                    <input className="display" type="checkbox" />
                </div>

                <div>
                    <ul className="menu">
                        <li  ><a className="menu" href="">Home</a></li>
                        <li><Link to='/inscription' className="menu" onClick={() => props.history.push('/inscription')}>Shop </Link></li>
                        <li><a className="menu" href="">Contact</a></li>

                    </ul>
                </div  >

                <div>
                    <ul className="menu">
                        <li><Link to='/inscription' className="menu" onClick={() => props.history.push('/inscription')}>Log in </Link></li>

                        <li><a className="menu" href="">Sign up</a></li>

                    </ul>
                </div>
            </div>
        </div>


    );
}
export default withheaderstyle(Header);