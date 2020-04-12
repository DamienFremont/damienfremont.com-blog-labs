class User {
    constructor(data) {
        this.id = data.id;
        this.created_date = data.created_date;
        this.email = data.email;
        this.username = data.username;
        this.enabled = data.enabled;
    }
}

class Credential {
    constructor(data) {
        this.created_date = data.created_date;
        this.user_ID = data.user_ID;
        this.credential_data = data.credential_data
    }
}

class UserRegistration {
    constructor(data) {
        this.email = data.email;
        this.password = data.password;
    }
}

export { User, Credential, UserRegistration };