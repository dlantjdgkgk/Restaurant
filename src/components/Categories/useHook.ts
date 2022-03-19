import { useRouter } from 'next/router';
import { useCacheApi } from 'react-cache-api';

const useCategories = () => {
    const router = useRouter();
    const currentCategory = router.query.value;
    console.log(currentCategory);

    //게시글 전체조회 API
    const { data: any } = useCacheApi(`/documents`, {
        offset: 0,
        limit: 21,
        category: currentCategory,
    });
    return { data: any };
};

export default useCategories;
