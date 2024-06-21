class ApiResponse {
    constructor(statsCode, data, message= "Success") {
        this.statusCode = statsCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400;
    }
}