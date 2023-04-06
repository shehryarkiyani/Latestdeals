import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { FormattedMessage } from 'react-intl';
export async function getStaticProps() {
  const news = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blogs/?fields=-content`
  ).then((res) => res.json());

  return {
    props: {
      news,
    },
    revalidate: 60,
  };
}

const News = ({ news }) => {
  const router = useRouter();
  const renderData = () => {
    for (let i = 0; i < news.blogs.length; i = i + 5) {
      return (
        <div className="lg:max-w-7xl flex flex-wrap lg:space-x-4 w-full px-2 lg:px-5 mb-5 space-y-2 lg:space-y-0">
          <div
            className="bg-white flex flex-col lg:lg:w-[50%] rounded-xl py-4 cursor-pointer"
            onClick={() => router.push(`/news/${news.blogs[i]?._id}`)}
          >
            <div className="text-3xl font-bold px-4 pb-3">
              {news.blogs[i]?.title}
            </div>
            <Image
              src={news.blogs[i]?.coverImage}
              alt="news"
              className="w-full h-fit py-3"
              width={560}
              height={420}
            />
            <div className="px-4">{news.blogs[i]?.description}</div>
            <button
              className="flex font-bold space-x-1 px-4 py-5 w-fit"
              onClick={() => router.push(`/news/${news.blogs[i]?._id}`)}
            >
              <p className="text-danger font-medium text-xs"><FormattedMessage id="Savings" /></p>
              <ChevronRightIcon className="h-4 w-4 text-danger" />
            </button>
          </div>
          <div className="flex flex-col justify-between gap-y-2 lg:space-y-0 flex-1">
            <div
              className="flex rounded-xl bg-white w-full cursor-pointer"
              onClick={() => router.push(`/news/${news.blogs[i]?._id}`)}
            >
              <Image
                className="rounded-l-xl w-[30%] lg:w-[40%] h-44"
                src={news.blogs[i + 1]?.coverImage}
                alt="news"
                width={240}
                height={150}
              />
              <div className="flex flex-col justify-between px-4 py-3">
                <div className="text-lg leading-5 font-bold">
                  {news.blogs[i + 1]?.title}
                </div>
                <button className="flex font-bold space-x-1 pt-4 w-fit">
                  <p className="text-danger font-medium text-xs"><FormattedMessage id="Savings" /></p>
                  <ChevronRightIcon className="h-4 w-4 text-danger" />
                </button>
              </div>
            </div>
            <div
              className="flex rounded-xl bg-white w-full cursor-pointer"
              onClick={() => router.push(`/news/${news.blogs[i]?._id}`)}
            >
              <Image
                className="rounded-l-xl w-[30%] lg:w-[40%] h-44"
                src={news.blogs[i + 2]?.coverImage}
                alt="news"
                width={200}
                height={150}
              />
              <div className="flex flex-col justify-between px-4 py-3">
                <div className="text-lg leading-5 font-bold">
                  {news.blogs[i + 2]?.title}
                </div>
                <button className="flex font-bold space-x-1 pt-4 w-fit">
                  <p className="text-danger font-medium text-xs"><FormattedMessage id="Savings" /></p>
                  <ChevronRightIcon className="h-4 w-4 text-danger" />
                </button>
              </div>
            </div>
            <div
              className="flex rounded-xl bg-white w-full cursor-pointer"
              onClick={() => router.push(`/news/${news.blogs[i]?._id}`)}
            >
              <Image
                className="rounded-l-xl w-[30%] lg:w-[40%] h-44 p-2"
                src={news.blogs[i + 3]?.coverImage}
                alt="news"
                width={200}
                height={150}
              />
              <div className="flex flex-col justify-between px-4 py-3">
                <div className="text-lg leading-5 font-bold">
                  {news.blogs[i + 3]?.title}
                </div>
                <button className="flex font-bold space-x-1 pt-4 w-fit">
                  <p className="text-danger font-medium text-xs"><FormattedMessage id="Savings" /></p>
                  <ChevronRightIcon className="h-4 w-4 text-danger" />
                </button>
              </div>
            </div>
            <div
              className="flex rounded-xl bg-white w-full cursor-pointer"
              onClick={() => router.push(`/news/${news.blogs[i]?._id}`)}
            >
              <Image
                className="rounded-l-xl w-[30%] lg:w-[40%]"
                src={news.blogs[i + 4]?.coverImage}
                alt="news"
                width={240}
                height={150}
              />
              <div className="flex flex-col justify-between px-4 py-3">
                <div className="text-lg leading-5 font-bold">
                  {news.blogs[i + 4]?.title}
                </div>
                <button className="flex font-bold space-x-1 pt-4 w-fit">
                  <p className="text-danger font-medium text-xs"><FormattedMessage id="Savings" /></p>
                  <ChevronRightIcon className="h-4 w-4 text-danger" />
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  console.log("news", news.blogs);
  return (
    <div className="flex flex-col pt-20 bg-secondary justify-center items-center">
      {renderData()}
    </div>
  );
};

export default News;
