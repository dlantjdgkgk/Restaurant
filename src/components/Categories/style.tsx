import styled from 'styled-components';

export const Popular = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 100px;
    .image {
        display: flex;
        padding-left: 100px;
    }
    .image:nth-child(2) {
        margin-left: auto;
        flex-direction: row-reverse;
    }
    .description {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px;
        color: red;
        font-size: 24px;
    }
    @media only screen and (max-width: 900px) {
        .popular {
            width: 50%;
            object-fit: cover;
        }
    }
`;
