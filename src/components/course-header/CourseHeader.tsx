
export const CourseHeader = () => {
	return (
		<div className="flex flex-col gap-2">
			<h1 className="font-extrabold text-xl">
				Curso de Figma para DEVs
			</h1>
			<p>
				Os mlehores desenvolvedores
			</p>
			
			<div className="flex gap-2 items-center">
				<button className="py-2 px-4 bg-paper rounded-full">
					Compartilhar
				</button>
				<span>48 aulas</span>
			</div>
		</div>
	);
};