import { Project } from "@/types/project";

const WORDPRESS_URL =
  process.env.WORDPRESS_URL || "https://nikita-portfolio.duckdns.org";

export async function getProjects(): Promise<Project[]> {
  const response = await fetch(
    `${WORDPRESS_URL}/wp-json/wp/v2/project?_embed`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  return response.json();
}