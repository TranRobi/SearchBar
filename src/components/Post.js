import React from "react";

function Post({ name, date, time, desc }) {
	return (
		<div className="h-fit p-4  bg-white border-white border-solid border-2 rounded shadow-lg w-full mb-4">
			<h2 className="font-bold">{name}</h2>
			<h2>Dátum: {date}</h2>
			<h2>Idő: {time}</h2>
			<h2>{desc}</h2>
		</div>
	);
}

export default Post;
