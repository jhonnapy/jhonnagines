import contentfulGQLClient from "@/_lib/contentful-graphql";

export async function getPortfolioItems() {
  const query = `
    query GetAllPortfolioItem {
      portfolioItemCollection(order: sys_firstPublishedAt_ASC) {
          items {
            name
            content
            description
            tags
            image {
              url
            }
          }
      }
    }
  `;
  const res = await contentfulGQLClient.query({ query });
  const { data } = await res.json();

  return data.portfolioItemCollection.items;
}
