import contentfulGQLClient from "@/_lib/contentful-graphql";
import { APIResponse, IAPIResponse } from "@/_utils/api-response";
import { gql } from "@apollo/client";
import { IPortfolioItem } from "../_contentful";

const apiClient = contentfulGQLClient();

export async function getPortfolioItems(): Promise<IAPIResponse<IPortfolioItem[]>> {
  const entries = await apiClient.query({
    query: gql`
      query GetPortfolioItems() {
        portfolioItemCollection() {
            items {
              name
              content
              description
              tags
            }
        }
      }
    `
  })

  return APIResponse.ok(entries.data.blogPostCollection.items)
}
