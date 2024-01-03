/* eslint-disable no-mixed-spaces-and-tabs */
import { useState } from "react";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import ambula from '../assets/ambula.png'
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen((prevValue) => !prevValue);
	};

	const navItems = [
		{
			id: 1,
			slug: "",
			name: "Home",
		},
		{
			id: 2,
			slug: "about",
			name: "About",
		},
		{
			id: 3,
			slug: "todo",
			name: "Todo",
		},
		{
			id: 4,
			slug: "shop",
			name: "Shop",
		},
		{
			id: 5,
			slug: "movies",
			name: "Movies",
		},
		{
			id: 6,
			slug: "contact",
			name: "Contact",
		},
	];

	return (
		<>
			<nav id='nav' className='flex w-full items-center justify-between p-4 px-8 lg:p-2 bg-white shadow-xl lg:px-16  '>
				<div>
					<div className="cursor-pointer font-bold">
						<Link to='/'><img src={ambula} alt="ambula" className="w-24 lg:w-36" /></Link>
					</div>
				</div>

				<div className='z-20 lg:hidden'>
					{isOpen ? (
						<img
							src={close}
							alt='close menu'
							className='cursor-pointer'
							onClick={handleClick}
						/>
					) : (
						<img
							src={menu}
							alt='open menu'
							className='cursor-pointer'
							onClick={handleClick}
						/>
					)}
				</div>

        <div className="hidden lg:block">
        <ul className='space-x-10  flex w-full'>
								{navItems.map(({ id, slug, name }) => {
									return (
									   <Link
									     key={id} 
										 to={slug} 
									    >
									    <li className="my-4 text-center p-3 shadow-sm  font-bold hover:underline">{name}</li>
									   </Link>
									);
								})}
							</ul>
        </div>
			</nav>
			{isOpen &&
				createPortal(
					<div
						onClick={handleClick}
						className='w-full h-full block bg-white absolute bg-opacity-60  top-0 lg:hidden'
					>
						<div
							onClick={(e) => e.stopPropagation()}
							className='w-60 bg-blue-950  flex justify-center pt-10 h-full shadow-xl p-4 lg:hidden'
						>
							<ul className='space-y-16  w-full'>
								{navItems.map(({ id, slug, name }) => {
									return (
									   <Link
									     key={id} 
										   to={slug} 
										   onClick={handleClick}
										>
									    <li className="bg-red-500 text-white  uppercase my-4 text-center p-3 shadow-sm rounded-xl font-bold">{name}</li>
									   </Link>
									);
								})}
							</ul>
						</div>
					</div>,
					document.body
				)}
		</>
	);
};

export default Navbar;