"use client";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  totalProducts: number;
  productsPerPage: number;
}

const Pagination = ({ totalProducts, productsPerPage }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Obtener la página actual desde los parámetros de búsqueda
  const currentPage = searchParams.get("page")
    ? parseInt(searchParams.get("page") as string, 10)
    : 1;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const onPrevPage = () => {
    if (currentPage > 1) {
      router.push(`?page=${currentPage - 1}`);
    }
  };

  const onNextPage = () => {
    if (currentPage < totalPages) {
      router.push(`?page=${currentPage + 1}`);
    }
  };

  const goToPage = (page: number) => {
    router.push(`?page=${page}`);
  };

  return (
    <nav className="mb-96">
      <ol className="flex justify-center gap-1 text-xs font-medium">
        <li>
          <a
            href="#"
            className={`inline-flex size-8 items-center justify-center rounded border border-pink-600 text-pink-600 w-20 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={onPrevPage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-white">Anterior</span>
          </a>
        </li>

        {pageNumbers.map((page) => (
          <li key={page}>
            <a
              href="#"
              className={`block size-8 rounded  text-center leading-8 text-white ${page === currentPage ? "bg-pink-600 text-white" : ""}`}
              onClick={() => goToPage(page)}
            >
              {page}
            </a>
          </li>
        ))}

        <li>
          <a
            href="#"
            className={`inline-flex size-8 items-center justify-center rounded border border-pink-600  text-pink-600 w-20 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={onNextPage}
          >
            <span className="text-white">Siguiente</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
      </ol>
    </nav>
  );
};

export default Pagination;
