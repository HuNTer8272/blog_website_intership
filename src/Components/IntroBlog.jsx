import React, { useState, useEffect } from "react";
import { AiOutlinePlusCircle, AiOutlineArrowRight } from "react-icons/ai";
import { NavLink, Link, useResolvedPath, useMatch } from "react-router-dom";
import axios from "axios";

function IntroBlog() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("all");

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/posts");
      setData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const activeMenuBag = (menu) => {
    const color = category.toLowerCase() === menu ? "#393939" : "";
    return color;
  };
  const activeMenuColor = (menu) => {
    const color = category.toLowerCase() === menu ? "white" : "";
    return color;
  };

  return (
    <>
      {/* Navbar for navigating between blogs */}
      <nav className=" mt-2 h-11 flex items-center space-x-14 sm:px-20 md:space-x-10 xl:space-x-16 px-5 font-poppins md:px-[20%] lg:px-[32%] xl:px-[30%]">
    d    <div className="p-[6px] rounded-full bg-l-black cursor-pointer hover:scale-110 hover:drop-shadow-xl">
          <AiOutlinePlusCircle className="text-xl text-white" />
        </div>

        <ul className="flex w-auto space-x-5 xl:space-x-20">
          <li>
            <button
              className=" hover:bg-[#808080]  hover:text-white  cursor-pointer font-normal drop-shadow-xl text-l-black px-5 py-1 rounded-2xl transition-all duration-300 ease-out"
              style={{
                background: activeMenuBag("all"),
                color: activeMenuColor("all"),
              }}
              onClick={() => setCategory("all")}
            >
              All
            </button>
          </li>

          <li>
            <button
              className="cursor-pointer font-normal hover:drop-shadow-lg hover:bg-[#808080] hover:text-white px-4 py-1 rounded-2xl transition-all duration-300 ease-out"
              style={{
                background: `${activeMenuBag("traveling")}`,
                color: `${activeMenuColor("traveling")}`,
              }}
              onClick={() => setCategory("traveling")}
            >
              traveling
            </button>
          </li>

          <li>
            <button
              className=" cursor-pointer font-normal hover:drop-shadow-lg hover:bg-[#808080] hover:text-white  px-4 py-1 rounded-2xl transition-all duration-300 ease-out"
              activeClassName="text-white bg-l-black"
              style={{
                background: `${activeMenuBag("coding")}`,
                color: `${activeMenuColor("coding")}`,
              }}
              onClick={() => setCategory("coding")}
            >
              coding
            </button>
          </li>

          <li>
            <button
              className=" cursor-pointer font-normal hover:drop-shadow-lg hover:bg-[#808080] hover:text-white px-4 py-1 rounded-2xl transition-all duration-300 ease-out"
              style={{
                background: `${activeMenuBag("movies")}`,
                color: `${activeMenuColor("movies")}`,
              }}
              onClick={() => setCategory("movies")}
            >
              movies
            </button>
          </li>
        </ul>
      </nav>

       {/* Intro blog in every category */}
      <div className="p-5 pt-10 xl:px-20">
        {data.length > 0 &&
          // Only show categories that is selected and only display the first post
          (category === "all"
            ? data
            : data.filter((post) => post.category.toLowerCase() === category)
          )
            .slice(0, 1)
            .map((post) => (
              <div
                key={post._id}
                className="grid grid-cols-1 md:grid-cols-2 border border-solid border-eee transition-all  ease-in-out duration-500 hover:scale-[1.00]  rounded-xl shadow-md  hover:shadow-lg"
              >
                <img
                  src={post.image}
                  alt="Post"
                  className="rounded-xl max-h-[500px] w-full object-cover "
                />
                <div className="p-2 md:p-4 xl:p-5">
                  <div className="   line-clamp-[5] md:line-clamp-[4] lg:line-clamp-[6] xl:line-clamp-[8] 2xl:line-clamp-[9] 3xl:line-clamp-[12] p-1 pt-3 ">
                    <h1
                      onClick={() => setCategory(post.category.toLowerCase())}
                      className="bg-[#ff5349] text-base w-[88px] text-center text-eee rounded-2xl py-[2px]  mb-5 mt-1 font-[700] cursor-pointer ease-in-out duration-100  hover:scale-110 "
                    >
                      {post.category}
                    </h1>
                    <h2 className="font-[450] font-roboto text-xl lg:text-2xl xl:text-3xl text-l-black 2xl:text-4xl 2xl:pt-4 ">
                      {post.title}
                    </h2>
                    <p className=" xl:pr-10 pt-3 2xl:pr-[40px]  text-[#6a6969] line text-sm xl:text-normal">
                      {post.description}
                    </p>
                  </div>
                  <div className="  flex justify-between p-2 2xl:p-4 items-center font-roboto  2xl:pt-5 font-normal text-sm text-[#6a6969] ">
                    <div className="">
                      <p>{post.author}</p>
                      <p>{new Date(post.date).toLocaleDateString()}</p>
                    </div>
                    <AiOutlineArrowRight className="text-xl cursor-pointer hover:text-l-black" />
                  </div>
                </div>
              </div>
            ))}
      </div>

     {/* rest of the blog in the remaning blog */}
      <div className="grid grid-cols-1 gap-8 p-5 md:grid-cols-2 xl:grid-cols-3 xl:px-20 pt-14">
        {data.map(
          (post) =>
            // Only show posts that match the selected category
            (category === "all" ||
              post.category.toLowerCase() === category) && (
              <div
                key={post._id}
                className="transition-all duration-500 ease-in-out border border-solid shadow-md border-eee rounded-2xl hover: hover:shadow-lg hover:-translate-y-4"
              >
                <img
                  src={post.image}
                  alt="Post"
                  className="rounded-2xl max-h-[300px] object-cover w-full border border-solid border-eee"
                />
                <div className="p-3 ">
                  <p
                    onClick={() => setCategory(post.category.toLowerCase())}
                    className="bg-[#ff5349]  text-sm w-[75px] text-center text-eee rounded-2xl py-[2px] mb-5 mt-1 font-[700] cursor-pointer ease-in duration-100 hover:scale-110"
                  >
                    {post.category}
                  </p>

                  <h2 className="font-[450] font-roboto text-sm lg:text-lg xl:text-xl text-l-black 2xl:text-2xl 2xl:pt-4 ">
                    {post.title}
                  </h2>
                  <p className="line-clamp-[5] xl:pr-10 pt-3 2xl:pr-[40px]  text-[#6a6969] line text-sm xl:text-normal">
                    {post.description}
                  </p>
                </div>
                <div className="  flex justify-between p-2 2xl:p-4 items-center font-roboto  2xl:pt-5 font-normal text-sm text-[#6a6969]">
                  <div className="">
                    <p>{post.author}</p>
                    <p>{new Date(post.date).toLocaleDateString()}</p>
                  </div>
                  <AiOutlineArrowRight className="text-xl cursor-pointer hover:text-l-black" />
                </div>
              </div>
            )
        )}
      </div>
    </>
  );
}

export default IntroBlog;
