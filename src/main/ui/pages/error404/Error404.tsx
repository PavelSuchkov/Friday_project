import React from 'react';
import style from './error404.module.css';


export const Error404 = () => {
    return (
        <div className={style.error404}>
            <h1>
                <div>404</div>
                <div>Page not found!</div>
            </h1>
        </div>
    )
}