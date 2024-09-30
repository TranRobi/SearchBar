"use client";
import Header from "@/components/Header";
import Events from "@/components/Events";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<>
			<Header />
			<div className="flex flex-col w-11/12 m-auto">
				<div
					className="flex-grow"
					style={{
						maxHeight: "calc(100vh - 150px)",
						"overflow-y": "auto",
					}}
				>
					<Events />
				</div>
			</div>
			<Footer />
		</>
	);
}
