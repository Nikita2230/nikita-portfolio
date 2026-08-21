export interface Project {
  id: number;
  slug: string;

  title: {
    rendered: string;
  };

  content: {
    rendered: string;
  };

  featured_media: number;

  meta: {
    project_short_description: string;
    project_work?: string;
    project_url: string;
    project_client: string;
    project_year: string;
    project_technologies: string[];
    project_featured: boolean;
  };

  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
      media_details?: {
        sizes?: {
          medium?: {
            source_url: string;
          };
          large?: {
            source_url: string;
          };
        };
      };
    }>;
  };
}