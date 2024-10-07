import { PlayerClass } from "@/components/player/playlist/components/PlayerClass";
import { PlayerClassGroup } from "@/components/player/playlist/components/PlayerClassGroup";
import { PlayerHeader } from "@/components/player/PlayerHeader";
import { PlayerPlaylist } from "@/components/player/playlist/PlayerPlaylist";

interface Props {
    params: {
        classId: string;
        courseId: string;
    }
}
export default function PagePlayer({params: { classId, courseId }}: Props) {
    return (
        <main className="flex flex-col gap-2">
            <PlayerHeader
                title="Curso"
                subtitle="descrição"
            />

            <div className="flex gap-2">
                <div className="max-w-96">
                    <PlayerPlaylist
                    playingClassId={classId}
                    playingCourseId={courseId}
                        classGroups={[
                            {
                                title: "Title",
                                classes: [
                                    {
                                        classId: 'aula-01',
                                        done: true,
                                        title:  "Titulo da aulaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaas"
                                    },
                                    {
                                        classId: 'aula-02',
                                        done: false,
                                        title:  "Titulo da aula"
                                    },
                                    {
                                        classId: 'aula-03',
                                        done: true,
                                        title:  "Titulo da aula"
                                    }
                                ]
                            },
                            
                        ]}
                    />
                </div>

                <div className="flex-1">
                    Player
                </div>
            </div>

            
        </main>
    );
};