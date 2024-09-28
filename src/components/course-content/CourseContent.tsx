import { ClassGroup, IClassGroupProps } from "./components/ClassGroup";

interface ICourseContentProps {
    classGroups: IClassGroupProps[];
}
export const CourseContent = ({ classGroups }: ICourseContentProps) => {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-lg font-extrabold">Coteúdo do curso</h2>

            <ol className="flex flex-col rounded-lg overflow-clip">
                {classGroups.map(classGroups => (
                    <li  key={classGroups.title} className="flex flex-col">
                        <ClassGroup {...classGroups} />
                    </li>
                ))}
            </ol>
        </div>
    );
};