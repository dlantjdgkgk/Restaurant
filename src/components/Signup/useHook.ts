import { useState, useEffect } from 'react';
import Router from 'next/router';
import axios from 'axios';

const useSignup = () => {
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setpassword] = useState('');
    const [repeatPw, setRepeatPw] = useState('');
    const [validEmail, setValidEmail] = useState('');
    const [validPassword, setValidPassword] = useState('');
    const [coincidePw, setCoincidePw] = useState('');
    const [res, setRes] = useState(null);

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (!isValidEmail(e.target.value)) {
            setValidEmail('올바른 이메일 형식이 아닙니다');
        } else {
            setValidEmail('');
        }
    };

    const handleNickname = (e) => {
        setNickname(e.target.value);
    };

    const handlePw = (e) => {
        setpassword(e.target.value);
        if (!isValidPassword(e.target.value)) {
            setValidPassword('올바른 비밀번호 형식이 아닙니다');
        } else {
            setValidPassword('');
        }
    };

    const handleRepeatPw = (e) => {
        setRepeatPw(e.target.value);
        if (password !== e.target.value) {
            setCoincidePw('입력한 비밀번호와 일치하지 않습니다');
        } else {
            setCoincidePw('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === '') {
            alert('email을 입력해주세요');
            return;
        }
        if (nickname === '') {
            alert('닉네임을 입력해주세요');
            return;
        }
        if (password === '') {
            alert('비밀번호를 입력해주세요');
            return;
        }
        if (repeatPw === '') {
            alert('비밀번호를 재입력해주세요');
            return;
        }
        setEmail('');
        setNickname('');
        setpassword('');
        setRepeatPw('');
        signupAPI();
    };

    const signupAPI = async () => {
        const payload = {
            email: email,
            nickname: nickname,
            password: password,
        };
        const signup = await axios.post(
            'https://api.digital-hamster.net/users',
            payload
        );
        Router.push('/');
        setRes(signup);
    };
    console.log(res);

    const isValidEmail = (e) => {
        const emailRule =
            /^[0-9a-zA-Z]([-.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        return emailRule.test(e);
    };
    const isValidPassword = (e) => {
        const passRule = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,15}$/;
        return passRule.test(e);
    };
    return {
        handleSubmit,
        email,
        handleEmail,
        validEmail,
        nickname,
        handleNickname,
        password,
        handlePw,
        validPassword,
        repeatPw,
        handleRepeatPw,
        coincidePw,
    };
};
export default useSignup;
