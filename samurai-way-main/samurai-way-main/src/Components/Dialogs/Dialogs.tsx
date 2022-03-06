import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';
import Names from './Names/Names';
import Messages from "./Messages/Messages";




type DialogsProps={
    MessageData:Array<Type1>,
    NamesData:Array<Type2>
}
type Type1={
    message:string,
    id:number
}
type Type2={
    names:string,
    id:number
}


const Dialogs = (props:DialogsProps) => {

    let nameselement = props.NamesData.map(name => <Names names={name.names} id={name.id}/>);
    let messageselement = props.MessageData.map(m => <Messages message={m.message}/>);
    return (
        <div className={s.Dialogs}>
            <div className={s.names}>

                {nameselement}

            </div>
            <div className={s.messages}>
                {messageselement}
            </div>
        </div>
    )
}
export default Dialogs