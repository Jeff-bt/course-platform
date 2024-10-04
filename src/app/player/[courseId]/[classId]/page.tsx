'use client';
import { PlayerClass } from "@/components/player/PlayerClass";
import { PlayerHeader } from "@/components/player/PlayerHeader";

interface Props {
    params: {
        classId: string;
        courseId: string;
    }
}
export default function PagePlayer({params: { classId, courseId }}: Props) {
    return (
        <>
            <PlayerHeader
                title="Curso"
                subtitle="descrição"
            />
            <PlayerClass
                done={false}
                playing={true}
                title="Titulo da aula"

                onCheck={() => console.log("check")}
                onPlay={() => console.log("check")}
            />
        </>
    );
};