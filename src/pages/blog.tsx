import Layout from "@/components/Layout";
import React, { ReactNode, useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { motion } from "framer-motion";

interface Article {
  title: string;
  articleLink: string;
  imageLink: string;
}

const Blog = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          "https://blog.blocverse.com/wp-json/wp/v2/posts",
          {
            params: {
              per_page: 6,
              orderby: "date",
              order: "desc",
            },
          }
        );
        const newArticles: Article[] = response.data.map(
          (post: {
            yoast_head_json: {
              title: string;
              og_image: { url: string }[];
            };
            link: string;
          }) => ({
            title: post.yoast_head_json.title,
            articleLink: post.link,
            imageLink: post.yoast_head_json.og_image[0].url,
          })
        );
        setArticles(newArticles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticles();

    const interval = setInterval(fetchArticles, 2880000);

    return () => clearInterval(interval);
  }, []);

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className='bg-bv-black-1 px-[22px] pb-[100px] lg:pt-[92px] pt-[32px] font-lato lg:px-[104px] text-white'>
      <h3 className='font-medium text-[32px] lg:text-[56px] font-clash'>
        Our Blog
      </h3>
      <div className='grid grid-cols-1 lg:grid-cols-3 mt-10 gap-[48px]'>
        {articles.map((article, index) => (
          <motion.a
            href={article.articleLink}
            key={index}
            className='flex flex-col lg:hover:scale-110 duration-200 leading-[24px] lg:leading-[32px] text-[20px] font-semibold lg:text-[24px] space-y-6 lg:space-y-8'
            initial='hidden'
            animate='visible'
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.div variants={imageVariants}>
              <Image
                src={article.imageLink}
                alt={article.title}
                width={500}
                height={300}
                priority={true}
              />
            </motion.div>
            <motion.div variants={textVariants}>
              <h3 className='capitalize'>{article.title.toLowerCase()}</h3>
            </motion.div>
          </motion.a>
        ))}
      </div>
      <div className='mt-12'>
        <a
          href='https://blog.blocverse.com'
          className='lg:text-[24px] text-brand-blue underline text-[24px] leading-[31.25px] font-bold lg:leading-[62.5px]'
        >
          View All
        </a>
      </div>
    </section>
  );
};

Blog.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Blog;
