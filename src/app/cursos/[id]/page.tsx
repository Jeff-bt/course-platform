import { Class } from "@/components/course-content/components/Class";
import { ClassGroup } from "@/components/course-content/components/ClassGroup";
import { CourseHeader } from "@/components/course-header/CourseHeader";
import { StartCourse } from "@/components/StartCourse";
import { Metadata } from "next";

interface Props {
	params: { id: string }
}

export async function generateMetadata({ params } : Props): Promise<Metadata>{

	return {
		title: params.id,
		description: params.id,
	};

};

export default function PageCourseDetail({ params }: Props) {
	
	return (
		<main className='mt-8 flex justify-center'>
			<div className="w-full min-[880px]:max-w-[880px] p-2 flex flex-col gap-4 lg:p-0 md:flex-row-reverse">
				
				<div className="flex-1">
					<StartCourse 
						title="Curso de Figma para DEVs"
						idClass="1"
						idCourse="1"
						imageUrl="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
					/>
				</div>
				<div className="flex-[2] flex flex-col gap-4">
					<CourseHeader />
					
					<ClassGroup 
						title="Introdução e apresentação do projeto"
						courseId="123"
						classes={[
							{id: '123', title: 'NextJs, TailwindCSS'},
							{id: '1234', title: 'NextJs, TailwindCSS'},
						]}
					/>
				</div>

            </div>
		</main>
	);
}