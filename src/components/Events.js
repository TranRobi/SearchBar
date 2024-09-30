"use client";
import React, { useEffect, useState } from "react";
import Newevent from "@/components/Newevent";
import Search from "@/components/Search";

function Events() {
	const [array, setArray] = useState([]);

	useEffect(() => {}, [array]);
	const getData = (datas) => {
		setArray([...array, datas]);
	};
	return (
		<>
			<h1 className="m-1 font-bold text-2xl">Események</h1>

			<Search array={array} />
			<Newevent onSubmit={getData} />
		</>
	);
}

export default Events;
