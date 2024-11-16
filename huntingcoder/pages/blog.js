import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import { useState,useEffect } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  console.log(blogs);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogItem) => {
          return <div key={blogItem.slug}>
          <Link href={`/blogpost/${blogItem.slug}`}>
            <h3 className={styles.h3}>{blogItem.title}</h3></Link>
          <p>{blogItem.content.substr(0,140)+'...'}</p>
        </div>
        })}
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();
  return {
    props : {allBlogs}
  }
}



export default Blog;
