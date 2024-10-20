import { query } from "./strapi";

interface Category {
  name: string;
  description: string;
  slug: string;
  image: {
    url: string;
  };
}

export function getCategories(locale: string = "es") {
  return query(
    `product-categories?locale=${locale}&fields[0]=name&fields[1]=description&fields[2]=slug&populate[image][fields][0]=url`
  ).then((res) => {
    return res.data.map((category: Category) => {
      const { name, description, slug, image: rawImage } = category;
      const image = `${rawImage.url}`;
      return { name, description, slug, image };
    });
  });
}
