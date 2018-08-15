export const hello = (event, context, callback) => {
  const data = JSON.parse(event.body);
  const name = data.name || "Default";

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Go Serverless v1.0! Your function, ${name}, executed successfully!`,
      input: event,
    }),
  };

  callback(null, response);
};
