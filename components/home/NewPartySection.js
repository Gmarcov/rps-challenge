import { React, useState, useEffect } from "react";
import Image from "next/image";
import EnterPartyIcon from "../../assets/icons/EnterPartyIcon.svg";
import { gql, useQuery, useMutation } from "@apollo/client";
import ServerParty from "./ServerParty";

const GET_ALL_ROOMS = gql`
	query {
		rooms {
			id
			full
		}
	}
`;

const CREATE_ROOM = gql`
	mutation {
		createRoom {
			id
			numUsers
			full
		}
	}
`;

const StartParty = () => {
	// Defining my Hooks

	const { data, error, loading } = useQuery(GET_ALL_ROOMS);
	const [createRoom] = useMutation(CREATE_ROOM);

	if (loading) return <p>Loading...</p>;

	if (error) return <p>Oups something went wrong: {error.message}</p>;

	return (
		<div className="flex flex-col justify-between bg-dark-700 text-white flex-grow rounded-[20px] max-w-md min-h-[720px]">
			<div className=" justify-center mt-6">
				<h1 className="text-center font-medium text-3xl mt-2">Start Playing</h1>
			</div>
			<div className="bg-dark-400 flex-grow mx-5 -mt-6 p-2 rounded-[20px] max-h-[400px]">
				<h1 className="font-medium text-2xl pt-4 pl-10">Open Parties</h1>
				<div className="h-[3px] rounded-full w-full bg-dark-500 my-4"></div>
				<div className="max-h-[300px] overflow-hidden hover:scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-dark-700 scrollbar-track-dark-400 px-6">
					{data?.rooms.map((room) => (
						<ServerParty key={room.id} id={room.id} full={room.full} />
					))}
				</div>
			</div>
			<div className="mx-4 mb-5">
				<div className="invisible text-red-400 p-2">Room Doesn't Exist</div>
				<div className="flex justify-between h-16 bg-dark-400 rounded-[10px] pl-8 pr-6 mb-6">
					<input
						type="text"
						placeholder="Join a Party"
						className="text-[20px] bg-transparent focus:outline-none font-normal"
					/>
					<Image src={EnterPartyIcon} className="cursor-pointer" />
				</div>
				<button
					onClick={() =>
						createRoom({
							refetchQueries: [{ query: GET_ALL_ROOMS }],
						})
					}
					className="text-dark-700 font-medium p-3 bg-green-light text-[20px] rounded-[10px] w-full"
				>
					Create a new Party
				</button>
			</div>
		</div>
	);
};

export default StartParty;
