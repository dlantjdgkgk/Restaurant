import { Form, Header } from './style';
import useSignup from './useHook';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Signup = () => {
    const {
        handleSubmit,
        email,
        handleEmail,
        validEmail,
        nickname,
        handleNickname,
        password,
        handlePw,
        validPassword,
        repeatPw,
        handleRepeatPw,
        coincidePw,
    } = useSignup();

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
            <Form onSubmit={handleSubmit}>
                <input
                    id='email'
                    type='text'
                    placeholder='이메일 입력'
                    value={email}
                    onChange={handleEmail}
                />
                <span>{validEmail}</span>

                <input
                    type='text'
                    id='nickname'
                    placeholder='닉네임 입력'
                    value={nickname}
                    onChange={handleNickname}
                />

                <input
                    id='pw'
                    type='password'
                    placeholder='비밀번호 입력'
                    value={password}
                    onChange={handlePw}
                />
                <span>{validPassword}</span>

                <input
                    type='password'
                    placeholder='비밀번호 재입력'
                    value={repeatPw}
                    onChange={handleRepeatPw}
                />
                <span>{coincidePw}</span>

                <button>가입하기</button>
            </Form>
        </>
    );
};

export default Signup;
