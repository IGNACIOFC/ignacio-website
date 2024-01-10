import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import BlogHome from './blogHome';
import { BlogPost, BlogMeta } from '@/lib/types';


export default function Blog() {
  const blogDir  = "posts";

  const files = fs.readdirSync(path.join(blogDir));

  const posts: BlogPost[] =  files.map(filename => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8')
    const {data: frontMatter} = matter(fileContent);

    const meta: BlogMeta = {
      title: frontMatter.title || '',
      date: frontMatter.date || new Date(),
      description: frontMatter.description || '',
      topic: frontMatter.topic || '',
      toc: frontMatter.toc || false,
      tags: frontMatter.tags || [],
    };

    return {
      meta,
      slug: filename.replace('.mdx', '')
    }
  })

  return (
   <BlogHome posts={posts} />
  )
}