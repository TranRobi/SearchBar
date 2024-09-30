"use client";
import React from "react";
import { useState } from "react";

function Newevent(props) {
	const [name, setName] = useState("");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [desc, setDesc] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		const obj = { name: name, date: date, time: time, desc: desc };
		props.onSubmit(obj);
		const form = e.target;
		form.reset();
	};
	return (
		<div className="mt-10">
			<h1 className="m-1 font-bold text-2xl ">Új események hozzáadása</h1>
			<div
				id="event"
				className="h-fit p-4  bg-white border-white border-solid border-2 rounded shadow-lg w-full"
			>
				<form onSubmit={handleSubmit}>
					<input
						className="w-full m-2 border-gray-500 border-solid border-2 p-2"
						type="text"
						placeholder="Események neve"
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						className="w-full m-2 border-gray-500 border-solid border-2 p-2"
						type="date"
						required
						onChange={(e) => setDate(e.target.value)}
					/>
					<input
						className="w-full m-2 border-gray-500 border-solid border-2 p-2"
						type="time"
						required
						onChange={(e) => setTime(e.target.value)}
					/>
					<textarea
						rows="4"
						cols="50"
						id="desc"
						placeholder="Esemény leírása"
						className="w-full m-2 border-gray-500 border-solid border-2 p-2"
						required
						onChange={(e) => setDesc(e.target.value)}
					></textarea>
					<button className="bg-green-500 p-2 rounded m-2 text-white">
						Hozzáadás
					</button>
				</form>
			</div>
		</div>
	);
}

export default Newevent;
