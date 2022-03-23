import styled from 'styled-components';
import Modal from 'react-modal';
export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        text-align: center;
    }
    > .wireframe {
        max-width: 1200px;
        width: 100%;
    }
    .slider {
        width: 100%;
        height: 600px;
        display: flex;
    }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 100px;
    .logo {
        display: flex;
    }
    ul {
        padding: 0;
    }
    li {
        list-style: none;
        color: black;
        font-weight: 700;
    }
    @media only screen and (max-width: 600px) {
        .logo {
            font-size: 10px;
        }
    }
`;

export const ModalContainer = styled(Modal)`
    position: fixed;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface image {
    url: string;
}

export const Images = styled.div<image>`
    background-image: url('${(props) => props.url}.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 600px;
`;

export const Category = styled.div`
    display: grid;
    flex-direction: column;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 300px);
    row-gap: 32px;
    column-gap: 16px;
    @media only screen and (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 300px);
    }
    @media only screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(6, 300px);
    }
    a {
        position: relative;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        text-decoration: none;
        color: black;
        border-radius: 10px;
        &:hover > .shadow {
            background-color: rgba(0, 0, 0, 0);
        }
        .shadow {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.2);
            transition: all 0.2s ease;
        }
        .category_description {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0px;
            left: 0px;
            > p {
                color: white;
                font-size: 28px;
                text-align: center;
                font-weight: 700;
            }
        }
    }
`;

export const CategoryImage = styled.div<image>`
    background-image: url('${(props) => props.url}.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 300px;
    backdrop-filter: brightness(60%);
`;
