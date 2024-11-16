import * as fs from "fs";
import { writeFile } from "fs/promises";


export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    let data = await fs.promises.readdir('contactData');
    fs.promises.writeFile(`contactData/${data.length+1}.json`, JSON.stringify(req.body));
    res.status(200).json(req)
  } else {
    // Handle any other HTTP method
    res.status(200).json(["allBlogs"])
  }
}