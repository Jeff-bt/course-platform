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
            Player {courseId} {classId}
        </>
    );
};