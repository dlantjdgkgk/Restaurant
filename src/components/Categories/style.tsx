import styled from 'styled-components';

interface image {
    url: string;
}

export const Popular = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 100px;
    .wireframe {
        max-width: 1200px;
        width: 100%;
        height: 800px;
    }
    .image {
        display: flex;
        margin-bottom: 40px;
    }
    .image:nth-child(2) {
        margin-left: auto;
        flex-direction: row-reverse;
        background-size: cover;
    }
    .description {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px;
        font-size: 24px;
    }
    @media only screen and (max-width: 720px) {
        .description {
            font-size: 14px;
            width: auto;
            object-fit: contain;
        }
    }
`;

export const Images = styled.div<image>`
    background-image: url('${(props) => props.url}');
    width: 40vw;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`;
