// Example utility file for future backend or CMS integration
export async function fetchProjects() {
  // Example placeholder API
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
  return res.json();
}
