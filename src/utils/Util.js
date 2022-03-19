import jwt from 'jsonwebtoken';

export const getToken = () => {
    const cookies = parseCookie(document.cookie);
    return cookies.token.replace('Bearer ', '');
};

export const getUserIdByToken = () => {
    if (document.cookie !== '') {
        const cookies = parseCookie(document.cookie);
        const token = cookies.token.replace('Bearer ', '');
        return jwt.decode(token).id;
    }
};

function parseCookie(str) {
    return str
        .split(';')
        .map((v) => v.split('='))
        .reduce((acc, v) => {
            acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(
                v[1].trim()
            );
            return acc;
        }, {});
}
