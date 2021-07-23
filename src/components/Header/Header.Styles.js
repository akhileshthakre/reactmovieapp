import styled from "styled-components";

export const Wrapper = styled.div`
    background: #000000;
    padding: 0 20px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 15px 0;
    margin: 0 auto;

`;

export const LogoImg = styled.img`
    width: 130px;
    @media screen and (max-width: 500px) {
        width:80px;
    }
`;

export const TMDBLogoImg = styled.img`
    width: 70px;

    @media screen and (max-width: 500px) {
        width: 50px;
    }
`;  