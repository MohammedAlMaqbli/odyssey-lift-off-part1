import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    # Fields go here
    tracksForHome: [Track!]!
    spaceCats: [SpaceCat!]!
  }

  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type SpaceCat {
    id: ID!
    name: String!
    age: Int
    missions: [Mission]
  }
  type Mission {
    id: ID!
    name: String!
    description: String!
  }
`;
