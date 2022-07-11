export const resolvers = {
	Query: {
		rooms: async (_parent, _args, ctx) => await ctx.prisma.room.findMany(),
	},
	// Query: {
	// 	rooms: () => [
	// 		{
	// 			id: "1",
	// 			numUsers: 0,
	// 			full: false,
	// 		},
	// 		{
	// 			id: "2",
	// 			numUsers: 0,
	// 			full: false,
	// 		},
	// 		{
	// 			id: "5",
	// 			numUsers: 0,
	// 			full: false,
	// 		},
	// 	],
	// },
};
