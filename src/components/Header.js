import React from "react";

function Header() {
	return (
		<div className="bg-gray-800 text-white h-20 flex-grow-0 relative w-full">
			<h1 className="text-2xl">Esenénynaptár</h1>
			<nav className="flex p-3 text-center w-fit m-auto">
				<li className="list-none mr-3">
					<a href="#form">Események</a>
				</li>
				<li className="list-none">
					<a href="#event">Új esemény hozzáadása</a>
				</li>
			</nav>
		</div>
	);
}

export default Header;
