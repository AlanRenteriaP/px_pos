import axios from 'axios';

axios.defaults.baseURL = ' http://192.168.56.1:3001';

export const authService = {
    login,
};

function login(username, password) {
    return new Promise(function(resolve, reject) {
        console.log('lol');
        axios.post('/auth/login', {
            username: username,
            password: password,
        })
            .then(function (response) {
                if(!response.data.error){
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('user', JSON.stringify(response.data));
                    resolve(response.data);
                }else {

                    // 200 server response with user and password invalid
                    reject(response.data.error);
                }

            })
            .catch(function (error) {
// 400 something went wrong with the server

                reject(error);
            });

    });
}

