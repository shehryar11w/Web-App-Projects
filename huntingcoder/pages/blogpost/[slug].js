import React from "react";
import { useRouter } from "next/router";
import { useState,useEffect } from "react";
import styles from "../../styles/Blog.module.css";
const slug = (props) => {
  const [blog, setBlogs] = useState(props.MyBlog);


  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        <div>{blog && blog.content}</div>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
    const {slug} = context.query;
    let data = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`);
    let MyBlog = await data.json();
    return {
      props : {MyBlog}
    }
  }



export default slug;
