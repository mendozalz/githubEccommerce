import { query } from "./strapi";

const { STRAPI_HOST } = process.env;

export function getProducts({
  categoryId,
  pageSize,
  page,
  sort,
}: {
  categoryId: string;
  pageSize: number;
  page: string | undefined;
  sort?: string;
}) {
  let url = `products?filters[product_category][slug][$contains]=${categoryId}&populate=images`;
  if (page) url += `&pagination[page]=${page}`;
  if (pageSize) url += `&pagination[pageSize]=${pageSize}`;
  if (sort) url += `&sort=${sort}`;
  return query(url).then((res) => {
    const { data, meta } = res;
    const products = data.map((product: any) => {
      const { name, slug, description, images: rawImages, price } = product;
      const image = `${STRAPI_HOST}/${rawImages[0].url}`;
      return { name, slug, description, image, price };
    });

    return { products, pagination: meta.pagination };
  });
}
