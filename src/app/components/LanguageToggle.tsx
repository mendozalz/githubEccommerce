"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface LanguageToggleProps {
  currentLang: string;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLang }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    return params.toString();
  };

  return (
    <div className="ml-4">
      <Link
        href={`${pathname}?${createQueryString("lang", "es")}`}
        className={`px-2 py-1 text-sm rounded-l-md ${
          currentLang === "es"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
        }`}
      >
        ES
      </Link>
      <Link
        href={`${pathname}?${createQueryString("lang", "en")}`}
        className={`px-2 py-1 text-sm rounded-r-md ${
          currentLang === "en"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
        }`}
      >
        EN
      </Link>
    </div>
  );
};

export default LanguageToggle;
