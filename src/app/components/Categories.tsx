import Link from "next/link";
import { getCategories } from "../lib/get-categories";

const Categories = async () => {
  const category = await getCategories();
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="sm:flex sm:items-center sm:justify-between sm:gap-4">
          <p className="text-xl font-semibold text-white sm:text-2xl">
            All categories
          </p>
        </div>
        <div className="mb-4 mt-6 grid grid-cols-1 gap text-center sm:mt-8 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {category.map((cat: any) => (
            <Link href={`categories/${cat.slug}`} key={cat.slug}>
              <div className="relative flex flex-col min-w-0 break-words bg-pink-600 w-full mb-6 shadow-lg rounded-lg">
                <img
                  className="w-full h-[190px] align-middle rounded-t-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${cat.image})` }}
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block"
                    style={{ height: "95px", top: "-94px" }}
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-pink-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">{cat.name}</h4>
                  <p className="text-md font-light mt-2 text-white">
                    {cat.description}
                  </p>
                </blockquote>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
