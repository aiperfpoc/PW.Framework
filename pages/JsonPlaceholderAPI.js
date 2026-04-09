exports.APIPage = class APIPage {

    constructor(page) {
        this.page = page;
        this.url = 'https://jsonplaceholder.typicode.com/';
    }

    async gotourl() {
        await this.page.goto(this.url);
    }

    async postRequest(title, body, userId) {
        const response = await this.page.request.post("https://jsonplaceholder.typicode.com/posts", {
            data: {
                title: title,
                body: body,
                userId: userId
            }
        });
        return response;
    }

};