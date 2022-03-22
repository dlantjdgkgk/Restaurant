import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
    margin-bottom: 50px;
    .logo {
        display: flex;
    }
    @media only screen and (max-width: 600px) {
        .logo {
            font-size: 10px;
        }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input {
        width: 500px;
        height: 30px;
        padding: 20px;
        margin-bottom: 20px;
    }
    button {
        margin-top: 30px;
        width: 540px;
        height: 50px;
        border: 0;
        outline: none;
        background-color: black;
        color: white;
        font-size: 20px;
        font-weight: 1000;
    }
    ul {
        padding: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    li {
        list-style: none;
        color: black;
        font-weight: 700;
        padding: 12px;
    }
    @media only screen and (max-width: 600px) {
        input {
            width: 250px;
        }
        button {
            width: 300px;
        }
    }
`;
