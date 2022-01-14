const baseURL = "http://localhost:5000/getFolderTree";

export const getTree = async () => {
  const response = await fetch(baseURL, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    referrerPolicy: "no-referrer",
  });
  const data = await response.json();
  return data;
};

export const getRandomString = (length) => {
  var randomChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var result = "";
  for (var i = 0; i < length; i++) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }
  return result;
};
