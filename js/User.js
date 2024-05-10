class User {
    user_id = '';
    username = '';
    email = '';
    password = '';
    api_url = 'https://663e65b4e1913c4767978788.mockapi.io';

    create () {
        let data = {
            username: this.username,
            email: this.email,
            password: this.password
        }
        console.log(data);
    }
}