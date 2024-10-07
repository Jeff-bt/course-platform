'use client';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { IPlayerClassProps, PlayerClass } from "./PlayerClass";


export interface IPlayerClassGroupProps {
    title: string;
    open: boolean;
    position: number;
    playingClassId: string;
    classes: (Pick<IPlayerClassProps, 'done' | 'title'> & { classId: string })[];
 
    OnCheck: (classId: string) => void;
    onPlay: (classId: string) => void;
    onToggle: () => void;
}
export const PlayerClassGroup = ({ classes, position, title, open, playingClassId, onToggle, onPlay, OnCheck }: IPlayerClassGroupProps) => {
    return(
        <div className="flex flex-col">
            <button onClick={onToggle} className="flex gap-2 p-4 bg-paper items-center active:opacity-80">
                <div className="bg-background h-12 w-12 flex items-center justify-center rounded-full">
                    {position}
                </div>
                <div className="flex flex-col flex-1 items-start">
                    <span className="font-bold text-start line-clamp-1">{title}</span>
                    <span className="text-sm font-light text-start line-clamp-1">
                         {classes.filter(classItem => classItem.done).length}/{classes.length} auals
                        </span>

                </div>

                {open 
                    ? <MdKeyboardArrowDown size={28}/>
                    : <MdKeyboardArrowRight size={28}/>
                }
            </button>
            
            <ol data-open={open} className="flex flex-col data-[open=false]:hidden">
                {classes.map(classItem => (
                    <li key={classItem.title}>
                        <PlayerClass
                            {...classItem}

                            playing={classItem.classId === playingClassId}

                            onCheck={() => OnCheck(classItem.classId)}
                            onPlay={() => onPlay(classItem.classId)}
                        />
                    </li>
                ))}
            </ol>
        </div>
    );
};