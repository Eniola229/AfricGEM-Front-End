export function isEven(index) {
  return index % 2 === 0;
}
export function extractCoverTopics(body) {
  // Define keywords that may indicate the start of a cover topic
  const keywords = [
    "Topics covered will include:",
    "Topics covered:",
    "In this blog post, we'll cover:",
    "In this comprehensive guide, we'll explore:",
    "In this comprehensive blog post, we'll delve into",
  ];

  // Initialize an empty array to store cover topics
  let coverTopics = [];

  // Iterate over each keyword
  keywords.forEach((keyword) => {
    // Find the index of the keyword in the body
    const index = body.indexOf(keyword);
    if (index !== -1) {
      // Extract the substring starting from the keyword
      const substring = body.substring(index + keyword.length);
      // Split the substring by newline characters to get individual cover topics
      const topics = substring
        .split("\n")
        .filter((topic) => topic.trim() !== ""); // Filter out empty topics
      // Concatenate the cover topics array with the extracted topics
      coverTopics = coverTopics.concat(topics);
    }
  });

  return coverTopics;
}

/*
// Example body of a blog post
const body = `
In this blog post, we'll cover:
1. Introduction to JavaScript
2. Advanced JavaScript Techniques
3. JavaScript Frameworks

Each topic will be discussed in detail to provide a comprehensive understanding of JavaScript development.
`;

// Extract cover topics from the body
const topics = extractCoverTopics(body);
*/

export const getMonth = function (index) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months[index];
};
