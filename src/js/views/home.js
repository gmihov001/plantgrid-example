import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { GardenGrid } from "../component/GardenGrid";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Garden Grid!</h1>
		<GardenGrid />
	</div>
);
