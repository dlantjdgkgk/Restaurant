import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from '../../redux/hooks';
import { updateCategoriesResult } from '../../redux/rootReducer';
import { useCookies } from 'react-cookie';
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';

const useWrite = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category_data, setcategory_data] = useState(null);
    const [category, setCategory] = useState(null);
    const [cookies, setCookie, removeCookie] = useCookies([]);
    const [searchWord, setSearchWord] = useState('');
    const dispatch = useDispatch();
    const router = useRouter();

    const token = cookies?.token?.split(' ')[1];
    const id = jwt.decode(token);
    const userId = id?.id;

    const Logout = async () => {
        await removeCookie('token');
    };

    useEffect(() => {
        const appendAPI = async () => {
            setcategory_data(
                await axios.get('https://api.digital-hamster.net/categories')
            );
        };
        appendAPI();
    }, []);

    const categories_result = category_data?.data?.result;
    dispatch(updateCategoriesResult(categories_result));

    const category_Options = [
        { label: 'Pizza', value: `${categories_result?.[0].value}` },
        { label: 'Chicken', value: `${categories_result?.[1].value}` },
        { label: 'Burger', value: `${categories_result?.[2].value}` },
        { label: 'Chinese', value: `${categories_result?.[3].value}` },
        { label: 'Noodle', value: `${categories_result?.[4].value}` },
        { label: 'Pasta', value: `${categories_result?.[5].value}` },
    ];

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleContent = (e) => {
        setContent(e.target.value);
    };

    const handleCategory = (category) => {
        setCategory(category);
    };

    const handleSearchWord = (e) => {
        setSearchWord(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData: Record<any, any> = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('category', category.value);
        formData.append('searchWord', searchWord);
        formData.append('userId', userId);
        formData.append('img', e.target.img.files[0]);

        const writeAPI = async () => {
            try {
                const write = await axios.post(
                    'https://api.digital-hamster.net/documents',
                    formData,
                    {
                        headers: {
                            Authorization: `${cookies.token}`,
                        },
                    }
                );
            } catch (ex) {
                if (ex.response && ex.response.status === 400) {
                    alert(ex?.response?.data?.message);
                }
            }
            router.push('/');
        };
        setTitle('');
        setCategory('');
        setContent('');
        setSearchWord('');
        writeAPI();
    };
    return {
        handleSubmit,
        title,
        handleTitle,
        category_data,
        category,
        handleCategory,
        category_Options,
        content,
        handleContent,
        searchWord,
        handleSearchWord,
        Logout,
        cookies,
    };
};

export default useWrite;
