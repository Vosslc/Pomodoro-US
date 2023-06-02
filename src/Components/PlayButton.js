// Date: 09/18/2021
// Note: React Functional Component - Play Button
//q: why is this a functional component?
//a: Functional components are basic JavaScript functions. These are typically arrow functions but can also be created with the regular function keyword. ... React also has another type of components called Pure Components which are the same as Functional Components but Class Components have some additional features.
//q: what is the purpose of this component?

function PlayButton(props) {
	return (
		<button {...props}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 24'
				fill='currentColor'
				class='w-6 h-6'
			>
				<path
					fill-rule='evenodd'
					d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z'
					clip-rule='evenodd'
				/>
			</svg>
		</button>
	);
}

export default PlayButton;
