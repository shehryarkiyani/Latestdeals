import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/`);
  const newsList = await res.json();
  const paths = newsList.blogs.map((news) => {
    return {
      params: { id: news._id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps(context) {
  const id = context.params.id;
  const news = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`
  ).then((res) => res.json());

  return {
    props: {
      news,
    },
    revalidate: 60,
  };
}

const NewsInstance = ({ news }) => {
  console.log("NEWS", news);
  return (
    <div className="flex flex-col items-center justify-center bg-secondary px-5 pt-20 pb-5">
      <div className="w-full max-w-2xl">
        <HomeIcon className="h-4 w-4 mb-4 mx-1" />
      </div>
      <div className="bg-white rounded-lg p-4 w-full max-w-2xl break-words font-[350]">
        <h1 className="text-2xl font-bold">{news?.blog.title}</h1>
        <p
          className="mt-5"
          dangerouslySetInnerHTML={{ __html: news?.blog.content }}
        ></p>
      </div>
    </div>
  );
};

export default NewsInstance;
