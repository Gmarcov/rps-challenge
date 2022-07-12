import React from "react";
import AvatarSection from "../components/home/AvatarSection";
import StartParty from "../components/home/NewPartySection";

const index = () => {
	return (
		<div className="flex flex-col bg-dark-300 font-medium text-white h-screen">
			<div className="justify-center my-14">
				<h1 className="text-3xl text-center">Welcome to RPS Challenge</h1>
			</div>
			<div className="flex mx-auto justify-between">
				<StartParty />
				<AvatarSection />
			</div>
			<div className="font-normal absolute bottom-5 w-full text-dark-100">
				<p className=" text-center">
					Made with love 🤍 by
					<a className="font-bold" href="github.com/gmarcov">
						{" "}
						GMarcov
					</a>{" "}
					| 2022
				</p>
			</div>
		</div>
	);
};

export default index;
