import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const docsDirectory = path.join(process.cwd(), 'docs');

export function getDocs() {
  const fileNames = fs.readdirSync(docsDirectory);

  const docs = fileNames
    .filter(fileName => {
      const fullPath = path.join(docsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);
      return matterResult.data.title && matterResult.data.date;
    })
    .map(fileName => {
      const fullPath = path.join(docsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);
      return {
        fileName,
        fullPath,
        title: matterResult.data.title,
        date: matterResult.data.date,
      };
    });

  return docs;
}