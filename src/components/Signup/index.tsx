import { Form } from './style';
import useSignup from './useHook';

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
            <Form onSubmit={handleSubmit}>
                <h3>회원가입</h3>
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
