class User {
    constructor(data) {
        this.id = data.id;
        this.created_date = data.created_date;
        this.username = data.username;
        this.enabled = data.enabled;
    }
}

class UserInfo {
    constructor(data) {
        this.id = data.id;
        this.created_date = data.created_date;
        this.username = data.username;
        this.enabled = data.enabled;
    }
}

class Credential {
    constructor(data) {
        this.created_date = data.created_date;
        this.user_ID = data.user_ID;
        this.credential_data = data.credential_data;
        this.algorithm = data.algorithm || null;
    }
}

class UserRegistration {
    constructor(data) {
        this.username = data.username;
        this.password = data.password;
    }
}

class LoginLocal {
    constructor(data) {
        this.username = data.username;
        this.password = data.password;
    }
}

export { User, Credential, UserRegistration, LoginLocal, UserInfo };