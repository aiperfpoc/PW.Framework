import {test, expect} from '@playwright/test';
import { APIPage } from '../../pages/JsonPlaceholderAPI';

test("API Post Request Test", async ({ page }) => {
    const apiPage = new APIPage(page);
    const response = await apiPage.postRequest("Playwright Testing", "Learning POST API testing", 1);
    expect(response.status()).toBe(201);
    const json = await response.json();
    expect(json.title).toBe("Playwright Testing");
    //console.log(json);
});

test("API Get Request Test", async ({request}) => {
    const response = await request.get("https://jsonplaceholder.typicode.com");
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain("JSONPlaceholder - Free Fake REST API");
    const responseBody = await response.text();
    //console.log(responseBody);
})