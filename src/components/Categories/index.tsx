import { Popular } from './style';
import Link from 'next/link';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useCategories from './useHook';
// get 에서만 useCacheApi 사용 가능

const Categories = () => {
    const { data } = useCategories();
    console.log(data);
    const isError = data?.error === true;
    const b = [data];
    console.log([data]?.[0]?.message);
    const url = 'https://map.kakao.com/link/search/';

    return (
        <>
            {isError ? null : (
                <Popular>
                    {data?.result.map((a) => {
                        return (
                            <div className='image'>
                                <Link href={`/detail?value=${a?.documentId}`}>
                                    <a>
                                        <img
                                            src={`${a?.img_link}`}
                                            width='500px'
                                            height='300px'
                                            className='popular'
                                        />
                                    </a>
                                </Link>
                                <div className='description'>
                                    <span>맛집 블로그</span>
                                    <p>{a?.title}</p>
                                    <p>{a?.content}</p>
                                    <Link href={url + a?.search_word}>
                                        <a>
                                            <p>카카오 지도로 보기</p>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </Popular>
            )}
        </>
    );
};

export default Categories;
