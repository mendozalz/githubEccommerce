"use client";
import { useRouter, useSearchParams } from "next/navigation";

const SortButtons = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Obtener el parámetro sort actual desde la URL
  const currentSort = searchParams.get("sort");

  // Función para cambiar el sort en la URL
  const changeSort = (sort: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (sort) {
      params.set("sort", sort); // Establecer nuevo sort
    } else {
      params.delete("sort"); // Eliminar el parámetro sort para volver al estado por defecto
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="max-w-screen-xl h-10 flex justify-center items-center gap-4 mt-10 text-center">
      <button
        className={`border-2 ${!currentSort ? "bg-pink-600 text-white" : ""} border-pink-600 rounded-3xl py-2 px-6`}
        onClick={() => changeSort(null)} // Restablecer a default (sin orden)
      >
        Default
      </button>
      <button
        className={`border-2 ${currentSort === "price:asc" ? "bg-pink-600 text-white" : ""} border-pink-600 rounded-3xl py-2 px-6`}
        onClick={() => changeSort("price:asc")} // Ordenar por precio ascendente
      >
        By Price
      </button>
    </div>
  );
};

export default SortButtons;
