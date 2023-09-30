import React from 'react';
import foo from './footer.module.scss'

const Footer = () => {
    return (
        <>
            <div className={foo.container}>
                <div className={foo.blocks}>
                    <h3>Мы в соц. сетях</h3>
                    <p>Ссылка</p>
                    <p>Ссылка</p>
                    <p>Ссылка</p>
                    <p>Ссылка</p>
                    <p>Ссылка</p>
                </div>
                <div className={foo.blocks}>
                    <h3>Контакты</h3>
                    <p>Телефон: </p>
                    <p>Почта: </p>
                </div>
                <div className={foo.blocks}>
                    <h3>Полезное</h3>
                </div>
            </div>
        </>
    );
}

export default Footer;