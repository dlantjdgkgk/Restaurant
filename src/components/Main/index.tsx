import { Header, Body, Category, Images, CategoryImage } from './style';
import Link from 'next/link';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import useMain from './useHook';
import Modal from 'react-modal';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { updateTemporaryMember } from '../../redux/rootReducer';
import { useSelector, useDispatch } from '../../redux/hooks';
import { shallowEqual } from 'react-redux';
import React from 'react';

const customStyles = {
    content: {
        top: '30%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
    },
};
const Main = () => {
    const { cookies, images, category_data, Logout } = useMain();
    const dispatch = useDispatch();
    const { temporaryMember } = useSelector(
        (state) => ({
            temporaryMember: state.temporaryMember,
        }),
        shallowEqual // 객체 반환할 때 필요
    );

    return (
        <>
            <Body>
                <div className='wireframe'>
                    <Header>
                        <Link href='/write'>
                            <FontAwesomeIcon icon={faEdit} size='3x' />
                        </Link>

                        <Link href='/'>
                            <div className='logo'>
                                <FontAwesomeIcon
                                    icon={faStar}
                                    size='5x'
                                    color='red'
                                />
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
                                        <button onClick={Logout}>
                                            로그아웃
                                        </button>
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </Header>

                    <Modal
                        isOpen={!temporaryMember}
                        onRequestClose={() =>
                            dispatch(updateTemporaryMember(true))
                        }
                        style={customStyles}
                    >
                        <h3>
                            회원가입후 정식회원 이용하는 법 : 가입한 이메일을
                            확인해주세요
                        </h3>
                    </Modal>

                    <Carousel>
                        {category_data?.map((category, i) => {
                            return <Images url={`${images[i]}`} />;
                        })}
                    </Carousel>

                    <br></br>
                    <h1>Our Popular Dishes</h1>
                    <Category>
                        {category_data?.map((category, index) => {
                            return (
                                <Link
                                    href={`/category?value=${category.description}`}
                                    key={category_data?.value}
                                >
                                    <a>
                                        <CategoryImage
                                            url={`${images[index]}`}
                                        />
                                        <div className='category_description'>
                                            <span>
                                                <b>{category.description}</b>
                                            </span>
                                        </div>
                                    </a>
                                </Link>
                            );
                        })}
                    </Category>
                </div>
            </Body>
        </>
    );
};

export default Main;
