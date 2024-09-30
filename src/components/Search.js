import React, { useState } from "react";
import Post from "@/components/Post";

function Search({ array }) {
	const [searchString, setSearchString] = useState();
	const [displayingArray, setDisplayingArray] = useState([]);

	let result = array.map((data) => (
		<Post name={data.name} date={data.date} time={data.time} desc={data.desc} />
	));

	let filteredRes = displayingArray.map((data) => (
		<Post name={data.name} date={data.date} time={data.time} desc={data.desc} />
	));
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const handleSearch = (e) => {
		setSearchString(e.target.value);
		console.log(searchString == "" ? "jah" : "nar");
		if (!searchString) return setDisplayingArray(array);

		const displayingArray = array.filter((event) =>
			event.name.includes(searchString)
		);

		setDisplayingArray(displayingArray);
	};
	return (
		<>
			<div
				id="form"
				className="h-fit p-4  bg-white border-white border-solid border-2 rounded shadow-lg w-full mb-4"
			>
				<from onSubmit={handleSubmit}>
					<input
						type="search"
						placeholder="Dátum vagy név kereése"
						className="w-full m-2 border-gray-500 border-solid border-2 p-2"
						onChange={handleSearch}
					/>
				</from>
			</div>
			{displayingArray.length === 0 ? result : filteredRes}
		</>
	);
}

export default Search;
