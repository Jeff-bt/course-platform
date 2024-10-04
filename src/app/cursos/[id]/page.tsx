import { Class } from "@/components/course-content/components/Class";
import { ClassGroup } from "@/components/course-content/components/ClassGroup";
import { CourseContent } from "@/components/course-content/CourseContent";
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
				<div className="flex-[2] flex flex-col gap-12 pb-12">
					<CourseHeader
						numberOfClasses={48}
						title="Curso de Figma para DEVs"
						description="Os melhores desenvolvedores do mercado fazem questão que estar preparados para os mais diversos tipos de desafios nas suas carreiras. A habilidade de desenvolver protótipos ou mesmo de entender como um protótipo foi desenvolvido pode ser um baita diferencial para você. Nesse curso que te mostrar de forma simples e prática como desenvolver protótipos no figma, vamos aproveitar certos conhecimentos de programação ao decorrer do curso. Tenho certeza que esse tem o potencial de ser o melhor curso de figma para desenvolvedores disponíveis gratuitamente. #CODARSE
"
					/>
					
					<CourseContent 
						classGroups={[
							{
								courseId: "123",
								title: "Introdução e apresentação do projeto",
								classes: [
									{id: '123', title: 'NextJs, TailwindCSS'},
									{id: '1234', title: 'NextJs, TailwindCSS'},
								]
							},
							{
								courseId: "122",
								title: "Introdução e apresentação do projeto",
								classes: [
									{id: '123', title: 'NextJs, TailwindCSS'},
									{id: '1234', title: 'NextJs, TailwindCSS'},
								]
							}
						]}
					/>
				</div>

            </div>
		</main>
	);
}