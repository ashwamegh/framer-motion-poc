import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
};

const childVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
};

const Order = ({ pizza }) => {
	const [showTitle, setShowTitle] = useState(true);
	setTimeout(() => setShowTitle(false), 4000);
	return (
		<motion.div
			className="container order"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<AnimatePresence>
				{showTitle && (
					<motion.h2 exit={{ opacity: 0 }}>
						Thank you for your order :)
					</motion.h2>
				)}
			</AnimatePresence>

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
