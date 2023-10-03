import React from 'react';
import nb from './layout.module.scss'
import Logo from './LayoutComponent/Logo/Logo';
import Search from './LayoutComponent/Search/Search';
import Icon from './LayoutComponent/Icon/Icon';
import Basket from './LayoutComponent/Basket/Basket';
import Menu from './LayoutComponent/Menu/Menu';

const Layout = (): React.ReactElement => {
    return (
        <>
            <div className={nb.layout}>
                <div>
                    <Logo />
                </div>
                <div>
                    <Search />
                </div>
                <div>
                   <Icon />
                </div>
                <div>
                    <Basket />
                </div>
                <div>
                    <Menu />
                </div>
            </div>
        </>
    );
}

export default Layout;