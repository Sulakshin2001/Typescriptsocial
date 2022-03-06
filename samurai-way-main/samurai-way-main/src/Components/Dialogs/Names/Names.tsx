import {NavLink} from "react-router-dom";

interface NamesProps {
    names: string;
    id: number;
}

const Names = ({names, id}: NamesProps) => {
    let path = `/dialogs/${id}`;
    return (
        <div>

            <div><NavLink to={path}>{names}</NavLink></div>
        </div>
    )
}
export default Names;