import { NEWS_API_KEY } from "./config";

export const getEntertainmentArticles = async () => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${NEWS_API_KEY}`
    );
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};
export const getSportsArticles = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=${NEWS_API_KEY}`
      );
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
};
export const getTechnologyArticles = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${NEWS_API_KEY}`
      );
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
};
export const getArticles = async topic => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${topic}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
  );
  const json = await response.json();
  return json;
};
  