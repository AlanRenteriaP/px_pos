
export const login = async (credentials) => {
    const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    const { token } = await response.json();
    return token;
};

export const register = async (credentials) => {
    const response = await fetch('http://localhost:8080/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
    });

    if (!response.ok) {
        throw new Error('Register failed');
    }

    const { token } = await response.json();
    return token;
};

export const change_password = async (token, newpassword) => {
    const response = await fetch('http://localhost:8080/auth/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({token, newpassword}),
    });

    if (!response.ok) {
        throw new Error('Password Change failed');
    }

    const data = await response.json();
    return data.newtoken;
};


export async function fetchWithToken(url, options = {}) {
    const token = localStorage.getItem('token'); // Retrieve token from local storage

    options.headers = {
        ...options.headers,
        // Bearer tokens are a type of token commonly used in Authorization headers
        'Authorization': `Bearer ${token}`
    };

    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return await response.json();
}