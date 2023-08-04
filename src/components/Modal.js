import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const backdropVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
};

const modalVariants = {
	hidden: {
		y: "-110vh",
		opacity: 0,
	},
	visible: {
		y: "200px",
		opacity: 1,
		transition: {
			delay: 0.5,
		},
	},
};

function Modal({ showModal, setShowModal }) {
	return (
		<AnimatePresence>
			{showModal && (
				<motion.div
					variants={backdropVariants}
					initial="hidden"
					animate="visible"
					className="backdrop"
					exit="hidden"
				>
					<motion.div className="modal" variants={modalVariants}>
						<motion.p>Want to make another Pizza?</motion.p>
						<Link to={"/"}>
							<button>Start Again</button>
						</Link>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default Modal;
