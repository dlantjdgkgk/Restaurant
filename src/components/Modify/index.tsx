import { Submit } from './style';
import Link from 'next/link';
import useModify from './useHook';

const Modify = () => {
    const { handleSubmit, title, handleTitle, image } = useModify();

    return (
        <>
            <Submit method='post' action='/' onSubmit={handleSubmit}>
                <Link href='/'>
                    <img
                        src='/create.PNG'
                        width='200'
                        height='200'
                        alt='My Image'
                        className='title'
                    ></img>
                </Link>

                <h1>블로그 글 작성하기</h1>
                <div>
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
                        <br></br>
                        <span className='upload'>업로드</span>
                        <input
                            type='file'
                            className='imgInput'
                            accept='image/*'
                            name='img'
                            ref={image}
                        />
                    </div>
                </div>

                <button className='submit'>제출하기</button>
            </Submit>
        </>
    );
};

export default Modify;
