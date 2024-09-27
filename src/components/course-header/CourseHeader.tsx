import { MdShare } from "react-icons/md";
import { CollapsibleText } from "./components/CollapsibleText";
import { ContentCopy } from "./components/CopyContext";

export const CourseHeader = () => {
	return (
		<div className="flex flex-col gap-2">
			<h1 className="font-extrabold text-xl">
				Curso de Figma para DEVs
			</h1>
			<CollapsibleText numberOfLinesWhenClosed={3}>
				Os melhores desenvolvedores do mercado fazem questão que estar preparados para os mais diversos tipos de desafios nas suas carreiras. A habilidade de desenvolver protótipos ou mesmo de entender como um protótipo foi desenvolvido pode ser um baita diferencial para você. Nesse curso que te mostrar de forma simples e prática como desenvolver protótipos no figma, vamos aproveitar certos conhecimentos de programação ao decorrer do curso. Tenho certeza que esse tem o potencial de ser o melhor curso de figma para desenvolvedores disponíveis gratuitamente. #CODARSE
			</CollapsibleText>
			
			<div className="flex gap-2 items-center">
				<ContentCopy title='Copie o coteúdo abaixo' content='https://www.radix-ui.com/primitives/docs/components/dropdown-menu'>
					<button className="py-2 px-4 bg-paper rounded-full flex items-center gap-2">
						<MdShare />
						Compartilhar
					</button>
				</ContentCopy>
				<span>48 aulas</span>
			</div>
		</div>
	);
};