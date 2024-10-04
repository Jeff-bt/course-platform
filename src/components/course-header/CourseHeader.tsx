'use client';
import { MdShare } from "react-icons/md";
import { CollapsibleText } from "./components/CollapsibleText";
import { ContentCopy } from "./components/CopyContext";

interface ICourseHeaderProps {
	title: string;
	description: string;
	numberOfClasses: number;
}
export const CourseHeader = ({ title, description, numberOfClasses }: ICourseHeaderProps) => {
	return (
		<div className="flex flex-col gap-2">
			<h1 className="font-extrabold text-xl">
				{title}
			</h1>
			<CollapsibleText numberOfLinesWhenClosed={3}>
				{description}
			</CollapsibleText>
			
			<div className="flex gap-2 items-center">
				<ContentCopy title='Copie o coteúdo abaixo' content={window.location.href}>
					<button className="py-2 px-4 bg-paper rounded-full flex items-center gap-2">
						<MdShare />
						Compartilhar
					</button>
				</ContentCopy>
				<span>{numberOfClasses} aulas</span>
			</div>
		</div>
	);
};