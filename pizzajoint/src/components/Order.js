import React, { useEffect } from "react";
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
			when: "beforeChildren",
			damping: 8,
			mass: 0.4,
			staggerChildren: 0.4,
		},
	},
	exit: {
		x: "100vw",
		transition: {
			ease: "easeInOut",
		},
	},
};

const childVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
};

const Order = ({ pizza, setShowModal }) => {
	useEffect(() => {
		setTimeout(() => setShowModal(true), 5000);
	}, [setShowModal]);

	return (
		<motion.div
			className="container order"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<h2>Thank you for your order :)</h2>

			<motion.p variants={childVariants}>
				You ordered a {pizza.base} pizza with:
			</motion.p>
			{pizza.toppings.map((topping) => (
				<motion.div variants={childVariants} key={topping}>
					{topping}
				</motion.div>
			))}
		</motion.div>
	);
};

export default Order;
