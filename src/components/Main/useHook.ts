import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useSelector } from '../../redux/hooks';
import { shallowEqual } from 'react-redux';
import axios from 'axios';

const useMain = () => {
    const [cookies, setCookie, removeCookie] = useCookies([]);
    const images = ['Pizza', 'Chicken', 'Burger', 'Chinese', 'Noodle', 'Pasta'];
    const [category_data, setcategory_data] = useState(null);

    const { temporaryMember } = useSelector(
        (state) => ({
            temporaryMember: state.temporaryMember,
        }),
        shallowEqual // 객체 반환할 때 필요
    );

    const Logout = async () => {
        await removeCookie('token');
    };

    const appendAPI = async () => {
        await axios
            .get('https://api.digital-hamster.net/categories')
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
    };
};

export default useMain;
