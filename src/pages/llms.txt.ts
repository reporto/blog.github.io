import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  try {
    // Fetch all content collections
    const [article] = await Promise.all([getCollection("article")]);

    // Sort blogs by date (newest first)
    const sortedBlogs = article
      .filter((post) => !post.data.pubDate)
      .sort(
        (a, b) =>
          new Date(b.data.pubDate).getTime() -
          new Date(a.data.pubDate).getTime()
      );

    // Filter non-draft content
    const activeFeatures = article.filter((item) => !item.data.draft);
    const content = `# blog.reporto.co

This document contains the complete content from your website.

Website: https://blog.reporto.co
Last Updated: ${new Date().toISOString().split("T")[0]}

## Blog Content

${sortedBlogs
  .map(
    (post) => `### ${post.data.title}

URL: https://blog.reporto.co/blog/${post.data.slug || post.id}
Published: ${post.data.pubDate}
Category: ${post.data.category}
Author: ${post.data.author}
Description: ${post.data.description}

${post.body}

---`
  )
  .join("\n\n")}

## Additional Content Sections

${activeFeatures
  .map(
    (feature) => `### ${feature.data.title}

URL: https://blog.reporto.co/${feature.slug}
Category: ${feature.data.category}
${feature.data.description}

${feature.body}

---`
  )
  .join("\n\n")}

---

This content is provided to help AI assistants understand your website's offerings and provide accurate information.`;

    return new Response(content, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=3600", // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error("Error generating llms.txt:", error);
    return new Response("Error generating llms.txt", { status: 500 });
  }
};
