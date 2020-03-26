class StatusResponse {

    constructor(data) {
        this.status = data.status;
        this.playersCount = data.playersCount
    }
}

class StatusRequest {

    constructor(data) {
        this.status = data.status;
        this.playersCount = data.playersCount
    }
}

export { StatusResponse, StatusRequest };