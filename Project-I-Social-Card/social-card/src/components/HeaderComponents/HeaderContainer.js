import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';

//arrow function returns a key word
const HeaderContainer = props => <h1> Lambda </h1>;

const Header = props => {
    return(
        <div>
            <HeaderContainer />
            <HeaderTitle />
            <HeaderContent />
        </div>
    );
};
export default Header;