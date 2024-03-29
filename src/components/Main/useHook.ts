import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useSelector } from '../../redux/hooks';
import { shallowEqual } from 'react-redux';
import axios from 'axios';
import { apiInstance } from '../../pages/api/setting';

const useMain = () => {
    const [cookies, setCookie, removeCookie] = useCookies([]);
    const images = ['pizza', 'chicken', 'burger', 'chinese', 'noodle', 'pasta'];
    const [category_data, setcategory_data] = useState(null);

    const { formalMember } = useSelector(
        (state) => ({
            formalMember: state.formalMember,
        }),
        shallowEqual // 객체 반환할 때 필요
    );

    const Logout = async () => {
        await removeCookie('token');
    };

    const appendAPI = async () => {
        await apiInstance
            .get('/categories')
            .then((res) => {
                console.log(res);
                setcategory_data(res.data.result);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // 카테고리 항목 조회
    useEffect(() => {
        appendAPI();
    }, []);

    return {
        cookies,
        images,
        category_data,
        Logout,
        formalMember,
    };
};

export default useMain;
