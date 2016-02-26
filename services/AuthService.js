let buffer = require('buffer');

class AuthService {
    login(creds, cb) {
        let b = new buffer.Buffer(`${this.username}:${this.password}`);
        let auth64 = b.toString('base64')

        fetch('https://api.github.com', {
            headers: {
                'Authorization': `Basic ${auth64}`
            }
        })
        .then((res) => {
            if (res.status >= 200 && res.status < 300) {
                return res;
            }

            throw {
                badCredentials: res.status === 401,
                unknownError: res.status != 401
            }
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            cb({success: true});
        })
        .catch((err) => {
            cb(err);
        })
        .finally(() => {
            cb({showProgress: false});
        });
    }
}

module.exports = new AuthService();