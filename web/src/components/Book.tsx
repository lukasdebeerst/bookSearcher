import {FC} from "react";

const Book: FC<{title: string, author: string}> = ({title, author}) => {

    return (
        <div key={title} className="bg-white py-4 px-1.5 my-4 w-full rounded text-center shadow-2xl">
            <h2 className="font-bold">{title}</h2>
            <p>{author}</p>
        </div>
    )

}

export default Book;