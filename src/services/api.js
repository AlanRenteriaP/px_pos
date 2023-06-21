
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