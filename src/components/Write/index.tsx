import { Submit, Header } from './style';
import Select from 'react-select';
import useWrite from './useHook';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Write = () => {
    const {
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
        cookies,
        Logout,
    } = useWrite();
    return (
        <>
            <Header>
                <Link href='/'>
                    <div className='logo'>
                        <FontAwesomeIcon icon={faStar} size='5x' color='red' />
                        <h1> Blog </h1>
                    </div>
                </Link>

                <ul className='function'>
                    {!cookies.token ? (
                        <li>
                            <Link href='/login'>
                                <a>로그인</a>
                            </Link>
                        </li>
                    ) : (
                        <li>
                            <Link href='/login'>
                                <button onClick={Logout}>로그아웃</button>
                            </Link>
                        </li>
                    )}
                </ul>
            </Header>

            <Submit method='post' action='/' onSubmit={handleSubmit}>
                <h1>블로그 글 작성하기</h1>

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
                        <span>항목</span>
                        {category_data ? (
                            <Select
                                value={category}
                                onChange={handleCategory}
                                options={category_Options}
                            />
                        ) : null}
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

export default Write;
