import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import React from "react";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import remarkToc from "remark-toc";
import { Code } from "bright";

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props) {
  let href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

// function Code({ children, ...props }) {
//   let codeHTML = highlight(children);
//   return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
// }

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

// set any prop globally
Code.lineNumbers = true;
Code.theme = {
  dark: "github-dark",
  light: "github-light",
  // lightSelector: '[data-theme="light"]',
  lightSelector: "html.light",
};
let components = {
  // h1: createHeading(1),
  // h2: createHeading(2),
  // h3: createHeading(3),
  // h4: createHeading(4),
  // h5: createHeading(5),
  // h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  pre: Code,
  Table,
};

const options = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
};

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={{
        mdxOptions: {
          remarkPlugins: [
            // Adds support for GitHub Flavored Markdown
            remarkGfm,
            // Makes emojis more accessible
            remarkA11yEmoji,
            // generates a table of contents based on headings
            remarkToc,
          ],
          // These work together to add IDs and linkify headings
          rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
        },
      }}
    />
  );
}
