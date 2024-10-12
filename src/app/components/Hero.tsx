import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { getHomeInfo } from "../lib/get-home-info";

export const Hero = async () => {
  console.log(await getHomeInfo());

  const { title, description, image } = await getHomeInfo();
  console.log(`Desde el HERO ${title}`);

  return (
    <main className="relative h-[90%] overflow-hidden bg-white dark:bg-gray-800">
      <header className="z-30 flex items-center w-full h-24 sm:h-32">
        <div className="container flex items-center justify-between px-6 mx-auto">
          <div className="text-3xl font-black text-gray-800 uppercase dark:text-white">
            Watch.ME
          </div>
          <div className="flex items-center">
            <nav className="items-center hidden text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex">
              <a href="#" className="flex px-6 py-2">
                Home
              </a>
              <a href="#" className="flex px-6 py-2">
                Watch
              </a>
              <a href="#" className="flex px-6 py-2">
                Product
              </a>
              <a href="#" className="flex px-6 py-2">
                Contact
              </a>
              <a href="#" className="flex px-6 py-2">
                Carrer
              </a>
            </nav>
            <button className="flex flex-col ml-4 lg:hidden">
              <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
              <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
              <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
            </button>
          </div>
        </div>
      </header>
      <div className="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
        <div className="container relative flex px-6 py-16 mx-auto">
          <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
            <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"></span>
            <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
              {title}
              <span className="text-5xl sm:text-7xl">Time</span>
            </h1>
            <div className="text-sm text-gray-700 sm:text-base dark:text-white">
              <BlocksRenderer content={description} />
            </div>
            <div className="flex mt-8">
              <a
                href="#"
                className="px-4 py-2 text-pink-500 uppercase bg-transparent border-2 border-pink-500 rounded-lg dark:text-white hover:bg-pink-500 hover:text-white text-md"
              >
                Show categories
              </a>
            </div>
          </div>
          <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
            <img src={image} className="max-w-xs m-auto md:max-w-sm" />
          </div>
        </div>
      </div>
    </main>
  );
};
