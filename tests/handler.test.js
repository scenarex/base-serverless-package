import { hello } from "../handler";
import json from "../mocks/handler-event.json";

test("hello", async () => {
  const event = json;
  const context = "context";
  const callback = (error, response) => {
    expect(response.statusCode).toEqual(200);
    expect(typeof response.body).toBe("string");
  };

  await hello(event, context, callback);
});
