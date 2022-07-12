export const resolvers = {
	Query: {
		rooms: async (_parent, _args, ctx) => await ctx.prisma.room.findMany(),
		room: async (_parent, { id }, ctx) =>
			await ctx.prisma.room.findOne({ where: { id } }),
	},

	Mutation: {
		createRoom: async (_parent, args, ctx) =>
			await ctx.prisma.room.create({ data: args }),

		deleteRoom: async (_parent, args, ctx) =>
			await ctx.prisma.room.delete({ where: args }),
	},
};
