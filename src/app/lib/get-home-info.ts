import { query } from "./strapi";

export function getHomeInfo() {
  return query("home?populate[cover][fields][0]=url").then((res) => {
    const { title, description, cover } = res.data;
    console.log(`Imagen - ${cover.url}`);
    const image = `${cover.url}`;
    console.log("COVER -", image);

    return { title, description, image };
  });
}
