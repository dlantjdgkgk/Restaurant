import { Header, Form } from './style';
import Link from 'next/link';
import useLogin from './useHook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const { handleSubmit, handleEmail, handlePw, email, password } = useLogin();

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
            <Form method='post' action='/' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='email'
                    value={email}
                    onChange={handleEmail}
                />
                <input
                    type='password'
                    placeholder='pw'
                    value={password}
                    onChange={handlePw}
                />
                <button>로그인</button>
                <ul className='function'>
                    <li>
                        <Link href='/signup'>
                            <a>회원가입</a>
                        </Link>
                    </li>
                </ul>
            </Form>
        </>
    );
};

export default Login;
