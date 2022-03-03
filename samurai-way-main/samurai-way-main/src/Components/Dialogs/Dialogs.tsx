import s from './Dialogs.module.css';
const Dialogs =() =>{
    return(
        <div className={s.Dialogs}>
            <div className={s.names}>
                <div>Vanya</div>
                <div>Nikita</div>
                <div>Dima</div>
                <div>Nastya</div>
            </div>
            <div className={s.messages}>
                <div>How are</div>
                <div>Its me</div>
                <div>Mario</div>
            </div>
        </div>
    )
}
export default Dialogs