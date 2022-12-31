import Head from "next/head";
import React from "react";
import Toolbar from "../../components/layouts/Toolbar/Index";
import PageTitle from "../../components/layouts/Toolbar/PageTitle";

const fontPage = () => {
	return (
		<>
			<div className="w-full flex flex-row flex-wrap gap-4">
				<div className="bg-white dark:bg-dark-dept-1 dark:border dark:border-[#2B2B40] py-5 px-9 rounded-xl flex-1">
					<p className="text-lg font-inter-thin"> Thin </p>
					<p className="text-lg font-inter-extralight"> Extra Light </p>
					<p className="text-lg font-inter-light"> Light </p>
					<p className="text-lg font-inter"> Regular </p>
					<p className="text-lg font-inter-medium"> Medium </p>
					<p className="text-lg font-inter-semibold"> Semibold </p>
					<p className="text-lg font-inter-bold"> Bold </p>
					<p className="text-lg font-inter-extrabold"> ExtraBold </p>
				</div>
			</div>
		</>
	);
};

export default fontPage;
