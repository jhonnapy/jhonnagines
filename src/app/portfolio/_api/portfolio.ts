import contentfulGQLClient from "@/_lib/contentful-graphql";
import { IPortfolio } from "../_contentful";

export async function getPortfolio() {
  const query = `
    query GetPortfolio {
      portfolioCollection(limit: 1) {
          items {
            resume {
              url
            }
          }
      }
    }
  `;
  const res = await contentfulGQLClient.query({ query });
  const { data } = await res.json();

  if (data.portfolioCollection.items.length === 0) {
    throw new Error('not-found');
  }

  return data.portfolioCollection.items[0] as IPortfolio;
}
