import { useCacheApi } from 'react-cache-api';
import jwt from 'jsonwebtoken';
import { useCookies } from 'react-cookie';
import Router, { useRouter } from 'next/router';
import axios from 'axios';
import { apiInstance } from '../../pages/api/setting';

const useCategories = () => {
    const router = useRouter();
    const currentCategory = router.query.value;
    console.log(currentCategory);
    const [cookies, setCookies] = useCookies([]);

    const token = cookies?.token?.split(' ')[1];
    const id = jwt.decode(token);
    const permission = id?.permission;

    //게시글 전체조회 API
    const { data } = useCacheApi(`/documents`, {
        offset: 0,
        limit: 21,
        category: currentCategory,
    });

    console.log(data?.result);

    // 게시글 수정
    const handleUpdate = (e) => {
        Router.push(
            `/modify?title=${data?.result?.[0]?.title}&img=${data?.result?.[0]?.img_link}&userId=${permission}&documentId=${data?.result?.[0]?.id}
            searchWord=${data?.result?.[0]?.search_word}`
        );
    };

    // 게시글 삭제하기  완료
    const handleDelete = () => {
        const payload = {
            userId: permission,
        };
        const deleteAPI = async () => {
            await apiInstance.delete(`/documents/${data?.result?.[0]?.id}`, {
                data: payload,
                headers: {
                    Authorization: `${cookies.token}`,
                },
            });
        };
        Router.push('/');
        deleteAPI();
    };

    return { data, permission, handleDelete, handleUpdate };
};

export default useCategories;
