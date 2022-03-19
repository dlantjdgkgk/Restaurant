import styled from 'styled-components';

export const Submit = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
    width: 100%;
    .form {
        display: flex;
        flex-direction: column;
    }
    .form > div:not(:last-child) {
        display: flex;
        margin-bottom: 30px;
    }
    .form > .upload {
        display: flex;
    }

    .form > div > span {
        width: 96px;
        display: flex;
        align-items: center;
        padding-left: 4px;
    }
    .form > div > input {
        flex: 1;
        width: 300px;
        height: 30px;
    }

    .submit {
        width: 10%;
        height: 50px;
        margin: 70.5px 48px 0 52.5px;
        padding: 12px 31px 11px 32px;
        border-radius: 25px;
        box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.16);
        color: white;
        border: solid 1px #707070;
        background-color: #232426;
    }
`;
