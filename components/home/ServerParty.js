import React from "react";

const ServerParty = ({ id, full }) => {
	return (
		<div className="flex justify-between cursor-pointer items-baseline hover:text-green-light hover:scale-[1.01]">
			<p className="font-normal text-[24px]">{id}</p>
			{full ? (
				<p className="font-normal text-[18px] text-red-300">Full</p>
			) : (
				<p className="font-normal text-[18px] text-green-light">Open</p>
			)}
			{full ? (
				<p className="font-arrow text-[24px] text-dark-100">---&gt;</p>
			) : (
				<p className="font-arrow text-[24px]">---&gt;</p>
			)}
		</div>
	);
};

export default ServerParty;
