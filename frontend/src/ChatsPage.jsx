import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '2b5f2fb9-d4bf-4b6e-86d1-e0643575f2fd', 
        props.user.username, 
        props.user.secret
    );
    return (
    <div style = {{height: '100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style = {{height:'100%'}} />

    </div>
    )
}
export default ChatsPage