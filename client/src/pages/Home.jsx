import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import imagePath from "./img/ai_img2.png";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  const tutorials = [
    { name: "JavaScript", link: "https://www.tutorialspoint.com/javascript/index.htm" },
    { name: "Python", link: "https://docs.python.org/3/tutorial/index.html" },
    { name: "Java", link: "https://www.geeksforgeeks.org/java/" },
    { name: "C++", link: "https://www.w3schools.com/cpp/" },
    { name: "React", link: "https://legacy.reactjs.org/tutorial/tutorial.html" },
    { name: "Node.js", link: "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs" },
    { name: "TypeScript", link: "https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html" },
    { name: "Ruby", link: "https://www.geeksforgeeks.org/ruby-tutorial/" },
    { name: "Linux", link: "https://www.javatpoint.com/linux-tutorial" },
  ];

  return (
    <div className="container mx-auto flex">
      <div className="flex-1">
        <div className="flex">
          <div className="flex-1 flex-col gap-2 p-28 px-8 max-w-6xl mx-auto relative">
            <div 
              style={{ 
                backgroundImage: `url(${imagePath})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                filter: 'opacity(0.4)'
              }} 
              className="absolute inset-0"
            />
            <div className="relative flex flex-col gap-2 p-8 z-10">
              <h1 className="text-3xl font-bold lg:text-5xl">
                Embark on Your Tech Journey with TechVoyage
              </h1>
              <p className="text-1xl font-bold">
                Dive Into a World of Thought-Provoking Articles
              </p>
              <p className=" text-xs sm:text-sm">
                Explore a comprehensive collection of articles and tutorials covering advanced topics such as web development, software engineering, programming languages, artificial intelligence, and data science. Stay ahead of the curve with in-depth guides, expert insights, and practical tips to enhance your knowledge and skills.
              </p>
              <Link
                to="/search"
                className="text-xs sm:text-sm text-teal-400 font-bold hover:underline"
              >
                View all posts
              </Link>
            </div>
          </div>

          <div className="w-1/4 p-4 bg-gray-200 dark:bg-slate-800">
            <h2 className="text-xl font-semibold mb-4">
              Recommended Tutorials
            </h2>
            <ul className="flex flex-col gap-2">
              {tutorials.map((tutorial) => (
                <li key={tutorial.name}>
                  <a
                    href={tutorial.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-500 hover:underline"
                  >
                    {tutorial.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-3 bg-amber-100 dark:bg-slate-800">
          <CallToAction />
        </div>

        <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
          {posts && posts.length > 0 && (
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-semibold text-center">
                Recent Posts
              </h2>
              <div className="flex flex-wrap gap-4">
                {posts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
              <Link
                to="/search"
                className="text-lg text-teal-500 hover:underline text-center"
              >
                View all posts
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
