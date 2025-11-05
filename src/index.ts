import * as fs from "fs";

const getText = (path: string) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (error: any, data: string) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

const start = async () => {
  try {
    const first = await getText("./content/first.txt");
    console.log(first);
  } catch (error) {
    console.log(error);
  }
};

start();

// getText('./content/first.txt')
//     .then(result => console.log(result))
//     .catch((error) => {console.log(error)})
