import React from "react";

const AvatarSection = () => {
	return (
		<div className="flex flex-col bg-dark-700 flex-grow ml-10 rounded-[32px] justify-between p-8 max-w-[700px]">
			<div className="justify-center mt-6">
				<h1 className="text-center font-medium text-3xl mt-2">
					Set your Avatar
				</h1>
			</div>
			<div className="mx-8">
				<div className="invisible text-red-400 p-2">Invalid username</div>
				<div className="flex h-16 bg-dark-400 rounded-[10px] pl-8 pr-6 mb-6">
					<input
						type="text"
						placeholder="Change your username (currently: Anonymous521)"
						className="text-[20px] bg-transparent focus:outline-none font-normal flex-grow"
					/>
				</div>
				<div className="flex flex-col justify-between h-96 bg-dark-400 rounded-[10px] p-6 pb-5 mb-10">
					<p className="text-dark-100">Set the hand you're playing with</p>
					<div className="flex flex-grow p-5 flex-wrap overflow-hidden hover:scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-dark-700 scrollbar-track-dark-400">
						<div className="h-20 w-20 bg-dark-500 hover:bg-dark-700 rounded-xl mr-3 cursor-pointer mb-3"></div>
						<div className="h-20 w-20 bg-dark-500 hover:bg-dark-700 rounded-xl mr-3 cursor-pointer mb-3"></div>
						<div className="h-20 w-20 bg-dark-500 hover:bg-dark-700 rounded-xl mr-3 cursor-pointer mb-3"></div>
						<div className="h-20 w-20 bg-dark-500 hover:bg-dark-700 rounded-xl mr-3 cursor-pointer mb-3"></div>
						<div className="h-20 w-20 bg-dark-500 hover:bg-dark-700 rounded-xl mr-3 cursor-pointer mb-3"></div>
						<div className="h-20 w-20 bg-dark-500 hover:bg-dark-700 rounded-xl mr-3 cursor-pointer mb-3"></div>
						<div className="h-20 w-20 bg-dark-500 hover:bg-dark-700 rounded-xl mr-3 cursor-pointer mb-3"></div>
						<div className="h-20 w-20 bg-dark-500 hover:bg-dark-700 rounded-xl mr-3 cursor-pointer mb-3"></div>
						<div className="h-20 w-20 bg-dark-500 hover:bg-dark-700 rounded-xl mr-3 cursor-pointer mb-3"></div>
						<div className="h-20 w-20 bg-dark-500 hover:bg-dark-700 rounded-xl mr-3 cursor-pointer mb-3"></div>
						<div className="h-20 w-20 bg-dark-500 hover:bg-dark-700 rounded-xl mr-3 cursor-pointer mb-3"></div>
						<div className="h-20 w-20 bg-dark-500 hover:bg-dark-700 rounded-xl mr-3 cursor-pointer mb-3"></div>
						<div className="h-20 w-20 bg-dark-500 hover:bg-dark-700 rounded-xl mr-3 cursor-pointer mb-3"></div>
						<div className="h-20 w-20 bg-dark-500 hover:bg-dark-700 rounded-xl mr-3 cursor-pointer mb-3"></div>
						<div className="h-20 w-20 bg-dark-500 hover:bg-dark-700 rounded-xl mr-3 cursor-pointer mb-3"></div>
						<div className="h-20 w-20 bg-dark-500 hover:bg-dark-700 rounded-xl mr-3 cursor-pointer mb-3"></div>
					</div>
				</div>
			</div>
			<div className="mx-8 mb-6">
				<button className="text-dark-700 font-medium p-3 bg-green-light text-[20px] rounded-[14px] w-full">
					Save my Changes
				</button>
			</div>
		</div>
	);
};

export default AvatarSection;
