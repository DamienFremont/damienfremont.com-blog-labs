class UserSettings {

}

class UserSettingsLocalStorage extends UserSettings {

    constructor(data) {
        this.hideWelcomeModal = data.hideWelcomeModal || true;
    }
}

export { UserSettingsLocalStorage };