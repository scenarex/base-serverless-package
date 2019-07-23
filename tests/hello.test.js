import { handler } from "../hello";
import json from "../mocks/hello-event.json";

test("hello", async () => {
  const event = json;
  const context = "context";
  const callback = (error, response) => {
    expect(response.statusCode).toEqual(200);
    expect(typeof response.body).toBe("string");
  };

  await handler(event, context, callback);
});
