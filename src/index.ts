import { readFile } from "fs/promises";

const first = async () => {
  try {
    const first = await readFile("./content/first.txt");
    console.log(first);
  } catch (error) {
    console.log(error);
  }
};
first();
// getText('./content/first.txt')
//     .then(result => console.log(result))
//     .catch((error) => {console.log(error)})
