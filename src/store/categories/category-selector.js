export const selectCategoriesMap = (state) =>
  state.categories.categoriesMap
//   .reduce((acc, category) => {
//     const { title, items } = category;
//     acc[title.toLowerCase()] = items;
//     return acc; // acc is the product object/map being build with the reduce method
//   }, {});
