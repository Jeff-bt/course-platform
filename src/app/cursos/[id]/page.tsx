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
			<div className="w-full min-[880px]:max-w-[880px] p-2 flex flex-col gap-4">
				<StartCourse 
					title="Curso de Figma para DEVs"
					idClass="1"
					idCourse="1"
					imageUrl="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
				/>

                <CourseHeader />
				<CourseHeader />
				<CourseHeader />
				<CourseHeader />
				<CourseHeader />
				<CourseHeader />
				<CourseHeader />

            </div>
		</main>
	);
}