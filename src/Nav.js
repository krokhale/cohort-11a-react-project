import React, {useState, useEffect} from 'react';
import {
    Link,
    NavLink
} from "react-router-dom";


function Nav(props) {
    return (
        <div>

            <div className={'p-5 text-center bg-blue-600'}>
                <ul>
                    <li className={'inline p-5'}>
                        <NavLink to="/about" activeClassName="underline text-white">
                            <span className={'text-xl text-white font-bold cursor-pointer'}>About</span>
                        </NavLink>
                    </li>
                    <li className={'inline p-5'}>
                        <NavLink to="/todos" activeClassName="underline text-white">
                            <span className={'text-xl text-white font-bold cursor-pointer'}>Todos</span>
                        </NavLink>
                    </li>
                    <li className={'inline p-5'}>
                        <NavLink to="/contact" activeClassName="underline text-white">
                            <span className={'text-xl text-white font-bold cursor-pointer'}>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/*<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>*/}
            {/*<div className="flex justify-center items-center">*/}
            {/*    <div>hey</div>*/}

            {/*</div>*/}

        </div>
    );
}

export default Nav;
