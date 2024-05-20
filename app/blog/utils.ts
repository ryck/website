import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  categories?: string;
  tags?: string;
};

function getMDXData(dir) {
  let mdxFiles = fs
    .readdirSync(dir)
    .filter((file) => path.extname(file) === ".mdx");
  return mdxFiles.map((file) => {
    // let { data: metadata, content } = readMDXFile(path.join(dir, file));

    let slug = path.basename(file, path.extname(file));
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data, content } = matter(raw);

    return {
      metadata: {
        ...data,
      },
      slug,
      date: new Date(data.publishedAt).toISOString(),
      readingTime: Math.ceil(readingTime(content).minutes),
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "app", "blog", "posts"));
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  let fullDate = targetDate.toLocaleString("en-GB", {
    month: "short",
    day: "2-digit",
    year: "2-digit",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
