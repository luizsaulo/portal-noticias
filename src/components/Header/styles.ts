import styled from 'styled-components';

export const Container = styled.header`
    background-color: #49065e;
    height: 12vh;
`;

export const Wrapper = styled.div`
    max-width: 1140px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 30px;
`;

export const Logo = styled.h1`
    color: #fff;
`;

export const Menu = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Link = styled.a`
    color: #fff;
    text-decoration: none;
`;