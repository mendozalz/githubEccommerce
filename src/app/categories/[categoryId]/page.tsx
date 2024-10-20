import Image from "next/image";
import Pagination from "@/app/components/Pagination";
import SortButtons from "@/app/components/SortByPrice";
import { getProducts } from "@/app/lib/get-product";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";

const PAGE_SIZE = 2;

interface Product {
  slug: string;
  name: string;
  price: number;
  image: string;
  description: any; // If using Strapi blocks, you might want to create a proper type for this
}

interface PaginationData {
  total: number;
}

interface ProductsResponse {
  pagination: PaginationData;
  products: Product[];
}

const ProductsPage = async ({
  params,
  searchParams,
}: {
  params: { categoryId: string };
  searchParams: { [key: string]: string | undefined };
}) => {
  const { categoryId } = params;
  const page = searchParams.page ? searchParams.page : "1";
  const sort = searchParams.sort ? searchParams.sort : undefined;

  const { pagination, products } = (await getProducts({
    categoryId,
    page,
    pageSize: PAGE_SIZE,
    sort,
  })) as ProductsResponse;

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="sm:flex sm:items-center sm:justify-between sm:gap-4 mt-10">
          <Link
            href={"/"}
            className="text-xl font-semibold text-white sm:text-2xl flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-left"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M5 12l6 6" />
              <path d="M5 12l6 -6" />
            </svg>
            Volver
          </Link>
        </div>
        <SortButtons />
        <div className="mb-4 mt-6 grid grid-cols-1 gap text-center sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              className="flex justify-center items-center min-h-auto"
              key={product.slug}
            >
              <div className="max-w-[720px] mx-auto">
                <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="object-cover"
                      fill
                    />
                    {/* <p>{product.image}</p> */}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        {product.name}
                      </p>
                      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        ${product.price}
                      </p>
                    </div>
                    <div className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75 [&>p]:line-clamp-2">
                      <BlocksRenderer content={product.description} />
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <button
                      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 bg-gray-700"
                      type="button"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Pagination
        totalProducts={pagination.total}
        productsPerPage={PAGE_SIZE}
      />
    </section>
  );
};

export default ProductsPage;
