import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.withCredentials = true;

export const authService = {
    login,
};

function login(email, password) {
    return new Promise(function(resolve, reject) {
        axios.post('/auth/login', {
            email: email,
            password: password,
        })
            .then(function (res) {
                console.log(res.data.response.code);
                switch (res.data.response.code){
                    case 200:
                        // signed in succesfuly
                        resolve(res.data.response);
                        break;
                    case 400:
                        // invalid password
                        reject(res.data.response);
                        break;
                    case 500:
                        // some sort of server error
                        reject(res.data.response);
                        break;
                    default: reject(res.data.response);
                }
                resolve(res.data.response);
            })
            .catch(function (error) {
// 400 something went wrong with the server
                console.log('there is an error connecting to the server', error);
                reject(error);
            });

    });
}

