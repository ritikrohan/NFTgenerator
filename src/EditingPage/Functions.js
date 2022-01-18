const baseURL = "http://sickalien.store:5000/getFolderTree";

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

export const formatFile = (fileData) => {
  const subfoldersLength =
    fileData && fileData.children && fileData.children.length;

  const hashCodeElement = [];
  const pathList = [];

  for (let i = 0; i < subfoldersLength; i++) {
    fileData &&
      fileData.children &&
      pathList.push(fileData.children[i].children[0].path.slice(3));
  }

  for (let i = 0; i < subfoldersLength; i++) {
    hashCodeElement.push({ name: getRandomString(4), path: pathList[i] });
  }

  const objects = [];

  subfoldersLength &&
    hashCodeElement &&
    hashCodeElement.map((obj) => {
      objects.push({
        name: obj.name,
        path: obj.path,
        height: 10,
        width: 10,
        depth: 0,
        x: 0,
        y: 0,
      });
    });

  return { objects, hashCodeElement };
};
