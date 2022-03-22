import { Popular, Images } from './style';
import Link from 'next/link';
import useCategories from './useHook';
// get 에서만 useCacheApi 사용 가능

const Categories = () => {
    const { data, permission, handleDelete, handleUpdate } = useCategories();
    console.log(data);

    const isError = data?.error === true;
    const url = 'https://map.kakao.com/link/search/';

    const validate = () => {
        if (permission === 2) {
            return (
                <div>
                    <button onClick={handleUpdate}>수정하기</button>
                    <button onClick={handleDelete}>삭제하기</button>
                </div>
            );
        } else if (permission === 1) {
            return null;
        }
    };

    return (
        <>
            {isError ? null : (
                <Popular>
                    <div className='wireframe'>
                        {data?.result?.map((a) => {
                            return (
                                <div className='image'>
                                    <Images url={`${a?.img_link}`} />
                                    <div className='description'>
                                        <span>맛집 블로그</span>
                                        <p>{a?.title}</p>
                                        <p>{a?.content}</p>
                                        <Link href={url + a?.search_word}>
                                            <a>
                                                <p>카카오 지도로 보기</p>
                                            </a>
                                        </Link>
                                        {validate()}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Popular>
            )}
        </>
    );
};

export default Categories;
