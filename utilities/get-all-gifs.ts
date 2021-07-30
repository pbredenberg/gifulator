import fs from 'fs';

export interface GifPageData {
  id: string;
  data: {
    title: string;
    date: string;
    gif: string;
    tags: string[];
  };
}

export default async function() {
  const fileNames = fs.readdirSync('content/gif');

  return Promise.all(fileNames.map(async fileName => {
    const gifData = await import(`../content/gif/${fileName}`) as { attributes: GifPageData };

    return {
      id: fileName.replace(/\.md$/, ''),
      data: gifData.attributes,
    }
  }));
}
