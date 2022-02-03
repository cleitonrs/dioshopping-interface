import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Contato, Home, Logo, Wrapper } from '../globalStyles';
import Cart from './Cart';

const Header = () => {
    return(

        <Container>
            <Wrapper>
                <Logo>Dio Shopping</Logo>
                <Home><Link style={{ textDecoration: 'inherit', color: 'inherit' }} to="/">Home</Link></Home>
                <Contato><Link style={{ textDecoration: 'inherit', color: 'inherit' }} to="/contato">Contato</Link></Contato>
                <Cart/>
            </Wrapper>
        </Container>

    )
}

export default Header;
