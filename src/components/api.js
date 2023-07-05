const endpoint = `https://m3txlqyrhiam5qh2vm623yzufa0vbvno.lambda-url.us-west-2.on.aws/`;

export const postInquiry = async ({ name, email, message, phoneno }) => {
  const body = JSON.stringify({
    senderName: name,
    senderEmail: email,
    message,
    phoneno,
  });
  const requestOptions = {
    method: "POST",
    body,
  };

  return fetch(endpoint, requestOptions)
    .then((response) => {
      if (!response.ok) throw new Error("Error in fetch");
      return response.json();
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
