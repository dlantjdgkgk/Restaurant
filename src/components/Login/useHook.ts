import { useState, useEffect } from 'react';
import axios from 'axios';
import Router from 'next/router';
import { useCookies } from 'react-cookie';
import { useDispatch } from '../../redux/hooks';
import { updateTemporaryMember } from '../../redux/rootReducer';

const useLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookie] = useCookies([]);
    const dispatch = useDispatch();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePw = (e) => {
        setPassword(e.target.value);
    };

    const loginAPI = async () => {
        const payload = {
            email: email,
            password: password,
        };
        const response: any = await axios.post(
            'https://api.digital-hamster.net/login',
            payload
        );
        if (response?.data?.result?.formalMember === false) {
            dispatch(updateTemporaryMember(false));
        }
        setCookie('token', `Bearer ${response?.data?.result?.Token}`);
        Router.push('/');
        console.log(response);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === '') {
            alert('email을 입력해주세요');
        }
        if (email !== '' && password === '') {
            alert('pw을 입력해주세요');
        }
        setEmail('');
        setPassword('');
        loginAPI();
    };

    return { handleSubmit, handleEmail, handlePw, email, password };
};
export default useLogin;
