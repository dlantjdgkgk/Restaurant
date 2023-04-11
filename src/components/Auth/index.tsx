import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { apiInstance } from '../../pages/api/setting';

const Auth = () => {
    const router = useRouter();
    const { authcode } = router.query;
    const [ment, Setment] = useState('로딩중');

    // 정식회원 변경 API
    useEffect(() => {
        const AuthAPI = async () => {
            if (authcode) {
                try {
                    await apiInstance.post(`/auths/${authcode}`);
                    Setment('인증 성공입니다 축하드려요');
                } catch (ex) {
                    if (ex.response && ex.response.status === 400) {
                        Setment(ex?.response?.data?.message);
                    }
                }
            }
        };
        AuthAPI();
    }, [authcode]);

    return (
        <>
            <div>{ment}</div>
            <Link href='/'>메인으로</Link>
        </>
    );
};

export default Auth;
