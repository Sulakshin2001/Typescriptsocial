
interface MessagesProps {
    message: string;
}

const Messages = ({message}: MessagesProps) => {
    return (
        <div>{message}</div>
    )
}
export default Messages;