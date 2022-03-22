import { Submit, Header } from './style';
import Link from 'next/link';
import useModify from './useHook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Modify = () => {
    const {
        handleSubmit,
        title,
        handleTitle,
        image,
        handleSearchWord,
        searchWord,
        content,
        handleContent,
    } = useModify();

    return (
        <>
            <Header>
                <Link href='/'>
                    <div className='logo'>
                        <FontAwesomeIcon icon={faStar} size='5x' color='red' />
                        <h1> Blog </h1>
                    </div>
                </Link>
            </Header>
            <Submit method='post' action='/' onSubmit={handleSubmit}>
                <h1>블로그 글 수정하기</h1>
                <div className='form'>
                    <div>
                        <span>제목</span>
                        <input
                            id='title'
                            type='text'
                            value={title}
                            onChange={handleTitle}
                        />
                    </div>
                    <div>
                        <span>리뷰</span>
                        <input
                            id='content'
                            type='text'
                            value={content}
                            onChange={handleContent}
                        />
                    </div>
                    <div>
                        <span>음식점 검색</span>
                        <input
                            id='searchWord'
                            type='text'
                            value={searchWord}
                            onChange={handleSearchWord}
                            placeholder=' 지점까지 작성해주세요 ex. (마천점)'
                        />
                    </div>
                    <div className='upload'>
                        <br></br>
                        <span>업로드</span>
                        <input type='file' accept='image/*' name='img' />
                    </div>
                </div>

                <button className='submit'>제출하기</button>
            </Submit>
        </>
    );
};

export default Modify;
