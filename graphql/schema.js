import { gql } from "apollo-server-micro";

export const typeDefs = gql`
	type Room {
		id: String
		numUsers: Int
		full: Boolean
	}

	type Query {
		rooms: [Room]
		room(id: Int): Room
	}

	type Mutation {
		createRoom: Room
		deleteRoom(id: Int): Room
	}
`;
