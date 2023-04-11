const login = (email, password) => {
    return fetch('https://ebecoconnect.com/api/TokenAuth/Authenticate', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: {
            "userNameOrEmailAddress": email,
            "password": password,
            "rememberClient": true,
            "singleSignIn": true,
            "returnUrl": "string"
        },
    }).then(response => response.json())
}