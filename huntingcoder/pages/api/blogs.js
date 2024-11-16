import * as fs from "fs";

export default async function handler(req, res) {
  // fs.readFile("blogdata/how-to-learn-flask.json",'utf-8',(err,data) => {
  //     res.status(200).json( JSON.parse(data) )
  // })
  let data = await fs.promises.readdir("BlogData");
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile("BlogData/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }
  res.status(200).json(allBlogs);
}
