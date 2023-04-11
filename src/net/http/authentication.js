import CONFIG from '../../constants/config';

const login = (email, password) => {
    return fetch(`http://${CONFIG.server_url}:${CONFIG.server_port}/api/user/login`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
    .then(response => response.text().then(text => {
        return {
            code: response.status,
            content: text,
        }
    }))
    .then(response => {
        return response;
    })
    .catch(error => {
        console.error(error);
    });
}

const register = (email, password) => {
    return fetch(`http://${CONFIG.server_url}:${CONFIG.server_port}/api/user/register`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
    .then(response => response.text().then(text => {
        return {
            code: response.status,
            content: text,
        }
    }))
    .then(response => {
        return response;
    })
    .catch(error => {
        console.error(error);
    });
}

export {login, register}