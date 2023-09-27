import React from 'react';
import foo from './footer.module.scss'

const Footer = () => {
    return (
        <>
            <div className={foo.container}>
                <h1>Футер</h1>
            </div>
        </>
    );
}

export default Footer;