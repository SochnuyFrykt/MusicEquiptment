import React from 'react';
import nb from './layout.module.scss'

const Layout = (): React.ReactElement => {
    return (
        <>
            <div className = {nb.layout}>
                <ul>
                    <li>
                        <a href="/">Logo</a>
                    </li>
                    <li>
                        <a href="/">search</a>
                    </li>
                    <li>
                        <a href="/">icon</a>
                    </li>
                    <li>
                        <a href="/">basket</a>
                    </li>
                    <li>
                        <a href="/">menu</a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Layout;