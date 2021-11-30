import {FC} from "react";

const Book: FC<{title: string, author: string}> = ({title, author}) => {

    return (
        <div key={title}>
            <h2>{title}</h2>
            <p>{author}</p>
        </div>
    )

}

export default Book;