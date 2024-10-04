import Link from "next/link";
import { MdPlayCircle } from "react-icons/md";

export const KeepWatching = () => {
    return (
        <Link
            href={`/player/{courseId}/{classId}`}
            className="mx-4 p-4 flex gap-2 bg-primary rounded-2xl hover:no-underline"
        >
            <div className="flex flex-col gap-2 flex-1">
                <h1 className="font-bold line-clamp-1">Titulo</h1>
                <p className="line-clamp-1">Descrição</p>
            </div>
            <div className="flex gap-2 items-center justify-center">
                <span className="hidden md:block">Continua assitino</span>
                <MdPlayCircle  size={28}/>
            </div>
        </Link>
    );
};