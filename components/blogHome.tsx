"use client";

import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion";

import SectionHeading from './section-heading';
import { BlogPost } from '@/lib/types';
import { useSectionInView } from "@/lib/hooks";



export default function BlogHome({ posts }: { posts: BlogPost[] }) {
  const { ref } = useSectionInView("Blog");
  console.log(posts[0])
  return (
    <motion.section
      id="blog"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
    <SectionHeading>Blog</SectionHeading>

    <section className='py-10'>
    <h2 className='text-2xl font-blod'>
      Latest Blogs
    </h2>

    <div className='py-2'>
      {posts.map(blog =>(
        <Link href={'/blog/' + blog.slug} passHref key={blog.slug}>
          <div className='group py-2 flex justify-between gap-2'>
            <div className='flex items-center justify-center pr-6'>
              <img src={'https://logos-download.com/wp-content/uploads/2019/01/JavaScript_Logo.png'} alt={blog.meta.title} className='rounded-md transition-transform duration-300 group-hover:scale-125' height={50} width={50} />
            </div>
            <div>
              <h3 className='text-lg font-blod group-hover:underline'>
                {blog.meta.title}
              </h3>
              <div>
              
                <p>{blog.meta.description}</p>
              </div>
              <div className='my-auto'>
                <p>{blog.meta.date}</p>
              </div>
             </div> 
          </div>
        </Link>
      ))}
    </div>
    </section>
   </motion.section>
  )
}
