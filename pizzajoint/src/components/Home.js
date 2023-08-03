import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
	hidden: {
		opacity: 0,
		x: "100vw",
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: "spring",
			delay: 0.5,
		},
	},
};

const Home = () => {
	return (
		<motion.div className="home container" variants={containerVariants}>
			<h2>Welcome to Pizza Joint</h2>
			<Link to="/base">
				<motion.button
					whileHover={{
						scale: 1.1,
						textShadow: "0px 0px 8px rgb(255, 255, 255)",
						boxShadow: "0px 0px 8px rgb(255, 255, 255)",
					}}
				>
					Create Your Pizza
				</motion.button>
			</Link>
		</motion.div>
	);
};

export default Home;
