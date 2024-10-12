import { query } from "./strapi";
const {STRAPI_HOST} = process.env;

export function getHomeInfo() {
  return query("home?populate[cover][fields][0]=url").then((res) => {
    const {title, description, cover} = res.data
    console.log(`Imagen - ${STRAPI_HOST}/${cover.url}`);
    const image = `${STRAPI_HOST}/${cover.url}`
    console.log("COVER -", image);
    
    
    return {title, description, image}
  });
}
