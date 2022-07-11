import { gql } from "apollo-server";

export const typeDefs = gql`
	type Room {
		id: String
		numUsers: Int
		full: Boolean
	}

	type Query {
		rooms: [Room]
	}
`;
