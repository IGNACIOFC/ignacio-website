import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type BlogMeta = {
  title: string;
  date: string;
  description: string;
  topic: string;
  toc: boolean;
  tags: string[];
};

export type BlogPost = {
  meta: BlogMeta;
  slug: string;
};

