import { Form } from './style';
import Link from 'next/link';
import useLogin from './useHook';

const Login = () => {
    const { handleSubmit, handleEmail, handlePw, email, password } = useLogin();

    return (
        <>
            <Form method='post' action='/' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='email'
                    value={email}
                    onChange={handleEmail}
                />
                <br></br>
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
