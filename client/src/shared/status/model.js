class StatusResponse {

    constructor(data) {
        this.status = data.status;
        this.accounts = data.accounts;
        this.players = data.players;
        this.games = data.games;
    }
}

class StatusRequest {

}

export { StatusResponse, StatusRequest };