import axios from 'axios';
import moment from 'moment';
import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useCacheApi } from 'react-cache-api';
import { getUserIdByToken } from '../../utils/Util';
import { useCookies } from 'react-cookie';
import { apiInstance } from '../../pages/api/setting';

const useDetail = () => {
    const router = useRouter();
    const documentId = router.query.value;
    const [isWriter, setIsWriter] = useState(null);
    const [loginUserId, setLoginUserId] = useState(null);
    const [cookies, setCookies] = useCookies([]);

    useEffect(() => {
        if (typeof window !== undefined) {
            const a = getUserIdByToken();
            setLoginUserId(a);
        }
    }, []);

    // 특정 아이디 게시글 조회 완료
    const { data } = useCacheApi(
        () => {
            if (documentId === undefined) {
                return null;
            } else {
                return `/documents/${documentId}`;
            }
        },
        {},
        {
            headers: {
                Authorization: `${cookies.token}`,
            },
        }
    );

    console.log(data);

    const start_time = moment(new Date(data?.result?.start_time)).format(
        'YYYY-MM-DD'
    );

    const end_time = moment(new Date(data?.result?.end_time)).format(
        'YYYY-MM-DD'
    );

    useEffect(() => {
        if (loginUserId === data?.result?.user_id) {
            setIsWriter(true);
        } else {
            setIsWriter(false);
        }
    }, [data, isWriter, loginUserId]);

    // 게시글 수정
    const handleUpdate = (e) => {
        Router.push(
            `/modify?title=${data?.result?.title}&img=${data?.result?.img_link}&userId=${data?.result?.user_id}&documentId=${documentId}`
        );
    };

    // 게시글 삭제하기  완료
    const handleDelete = () => {
        const payload = {
            userId: loginUserId,
        };
        const deleteAPI = async () => {
            await apiInstance.delete(`/documents/${documentId}`, {
                data: payload,
                headers: {
                    Authorization: `${cookies.token}`,
                },
            });
        };
        Router.push('/');
        deleteAPI();
    };
    return {
        data,
        start_time,
        end_time,
        isWriter,
        handleDelete,
        handleUpdate,
    };
};

export default useDetail;
