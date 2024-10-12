import { query } from "./strapi";

const { STRAPI_HOST } = process.env;

export function getProducts({ categoryId }: { categoryId: string }) {
  return query(
    `products?filters[product_category][slug][$contains]=${categoryId}&populate=images`
  ).then((res) => {
    const { data, meta } = res;
    const products = data.map((product: any) => {
      const { name, slug, description, images: rawImages, price } = product;
      const image = `${STRAPI_HOST}/${rawImages[0].url}`;
      return { name, slug, description, image, price };
    });

    return { products, pagination: meta.pagination };
  });
}
