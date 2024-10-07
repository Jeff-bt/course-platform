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
        <main className="flex flex-col gap-2 h-screen">
            <PlayerHeader
                title="Curso"
                subtitle="descrição"
            />

            <div className="flex gap-2 h-[calc(100vh-72px)]">
                <div className="max-w-96">
                    <PlayerPlaylist
                    playingClassId={classId}
                    playingCourseId={courseId}
                        classGroups={[
                            {
                                title: 'Introdução e apresentação do projeto',
                                classes: [
                                  {
                                    done: true,
                                    classId: 'aula-00',
                                    title: 'API Rest, Node e Typescript: #00 - Apresentação do curso, tecnologias usadas e muito mais'
                                  },
                                  {
                                    done: false,
                                    classId: 'aula-01',
                                    title: 'API Rest, Node e Typescript: #01 - Apresentação do curso, tecnologias usadas e muito mais'
                                  },
                                  {
                                    done: false,
                                    classId: 'aula-02',
                                    title: 'API Rest, Node e Typescript: #02 - Apresentação do curso, tecnologias usadas e muito mais'
                                  },
                                  {
                                    done: false,
                                    classId: 'aula-03',
                                    title: 'API Rest, Node e Typescript: #03 - Apresentação do curso, tecnologias usadas e muito mais'
                                  },
                                ]
                              },
                              {
                                title: 'Introdução e apresentação do projeto',
                                classes: [
                                  {
                                    done: true,
                                    classId: 'aula-00',
                                    title: 'API Rest, Node e Typescript: #00 - Apresentação do curso, tecnologias usadas e muito mais'
                                  },
                                  {
                                    done: false,
                                    classId: 'aula-01',
                                    title: 'API Rest, Node e Typescript: #01 - Apresentação do curso, tecnologias usadas e muito mais'
                                  },
                                  {
                                    done: false,
                                    classId: 'aula-02',
                                    title: 'API Rest, Node e Typescript: #02 - Apresentação do curso, tecnologias usadas e muito mais'
                                  },
                                  {
                                    done: false,
                                    classId: 'aula-03',
                                    title: 'API Rest, Node e Typescript: #03 - Apresentação do curso, tecnologias usadas e muito mais'
                                  },
                                ]
                              },
                              {
                                title: 'Introdução e apresentação do projeto',
                                classes: [
                                  {
                                    done: true,
                                    classId: 'aula-00',
                                    title: 'API Rest, Node e Typescript: #00 - Apresentação do curso, tecnologias usadas e muito mais'
                                  },
                                  {
                                    done: false,
                                    classId: 'aula-01',
                                    title: 'API Rest, Node e Typescript: #01 - Apresentação do curso, tecnologias usadas e muito mais'
                                  },
                                  {
                                    done: false,
                                    classId: 'aula-02',
                                    title: 'API Rest, Node e Typescript: #02 - Apresentação do curso, tecnologias usadas e muito mais'
                                  },
                                  {
                                    done: false,
                                    classId: 'aula-03',
                                    title: 'API Rest, Node e Typescript: #03 - Apresentação do curso, tecnologias usadas e muito mais'
                                  },
                                ]
                              },
                              {
                                title: 'Introdução e apresentação do projeto',
                                classes: [
                                  {
                                    done: true,
                                    classId: 'aula-00',
                                    title: 'API Rest, Node e Typescript: #00 - Apresentação do curso, tecnologias usadas e muito mais'
                                  },
                                  {
                                    done: false,
                                    classId: 'aula-01',
                                    title: 'API Rest, Node e Typescript: #01 - Apresentação do curso, tecnologias usadas e muito mais'
                                  },
                                  {
                                    done: false,
                                    classId: 'aula-02',
                                    title: 'API Rest, Node e Typescript: #02 - Apresentação do curso, tecnologias usadas e muito mais'
                                  },
                                  {
                                    done: false,
                                    classId: 'aula-03',
                                    title: 'API Rest, Node e Typescript: #03 - Apresentação do curso, tecnologias usadas e muito mais'
                                  },
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