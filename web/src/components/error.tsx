import {FC} from "react";

const Error: FC<{message: string}> = ({message}) => {

    return (
        <div className={"w-full p-4 my-4 text-red-400 bg-white text-center"}>
            <p>{message}</p>
        </div>

    )

}

export default Error;