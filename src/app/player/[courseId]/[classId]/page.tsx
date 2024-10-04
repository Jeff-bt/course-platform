'use client';
import { PlayerClass } from "@/components/player/PlayerClass";
import { PlayerClassGroup } from "@/components/player/PlayerClassGroup";
import { PlayerHeader } from "@/components/player/PlayerHeader";

interface Props {
    params: {
        classId: string;
        courseId: string;
    }
}
export default function PagePlayer({params: { classId, courseId }}: Props) {
    return (
        <main className="flex flex-col gap-20">
            <PlayerHeader
                title="Curso"
                subtitle="descrição"
            />
            <PlayerClassGroup
                onToggle={() => console.log("toogle")}
                open={true}
                title="Title"
                position={1}
                classes={[
                    {
                        done: true,
                        playing: false,
                        title:  "Titulo da aula"
                    },
                    {
                        done: false,
                        playing: false,
                        title:  "Titulo da aula"
                    },
                    {
                        done: true,
                        playing: true,
                        title:  "Titulo da aula"
                    }
                ]}
            />
        </main>
    );
};