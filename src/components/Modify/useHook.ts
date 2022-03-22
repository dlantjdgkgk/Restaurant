import { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';
import { useRef } from 'react';
const useModify = () => {
    const [title, setTitle] = useState(null);
    const [searchWord, setSearchWord] = useState(null);
    const [content, setContent] = useState(null);
    const [cookies, setCookie] = useCookies([]);
    const [imgurl, setImgurl] = useState('');
    const router = useRouter();
    const token = cookies?.token?.split(' ')[1];
    const id = jwt.decode(token);
    const userId = id?.id;
    const image = useRef(null);

    useEffect(() => {
        if (router.query) {
            setTitle(router.query.title);
            setSearchWord(router.query.search_word);
            setContent(router.query.content);
            setImgurl(`${router.query.img}`);
        }
    }, [router.query]);

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleSearchWord = (e) => {
        setSearchWord(e.target.value);
    };

    const handleContent = (e) => {
        setContent(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title === '') {
            alert('제목을 입력해주세요');
            return;
        }
        const updateAPI = async () => {
            const payload = new FormData();
            payload.append('img', e.target.img.files[0]);
            payload.append('title', title);
            payload.append('searchWord', searchWord);
            payload.append('content', content);
            payload.append('userId', userId);
            await axios.put(
                `https://api.digital-hamster.net/documents/${router.query.documentId}`,
                payload,
                {
                    headers: {
                        Authorization: `${cookies.token}`,
                    },
                }
            );
            router.push('/');
        };
        setTitle('');
        updateAPI();
    };

    return {
        handleSubmit,
        title,
        searchWord,
        handleSearchWord,
        handleTitle,
        image,
        content,
        handleContent,
    };
};

export default useModify;
