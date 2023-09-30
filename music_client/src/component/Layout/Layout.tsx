import React from 'react';
import nb from './layout.module.scss'
import Logo from './LayoutComponent/Logo/Logo';

const Layout = (): React.ReactElement => {
    return (
        <>
            <div className={nb.layout}>
                <div>
                    <Logo />
                </div>
                <div>
                    <a href="/">search</a>
                </div>
                <div>
                    <a href="/">icon</a>
                </div>
                <div>
                    <a href="/">basket</a>
                </div>
                <div>
                    <a href="/">menu</a>
                </div>
            </div>
        </>
    );
}

export default Layout;