import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
    .logo {
        display: flex;
        margin-bottom: 20px;
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
        padding: 20px;
    }
    #nickname {
        margin-bottom: 20px;
    }
    button {
        width: 540px;
        height: 50px;
        border: 0;
        outline: none;
        background-color: black;
        color: white;
        font-size: 20px;
        font-weight: 1000;
    }
    span {
        padding: 20px;
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
