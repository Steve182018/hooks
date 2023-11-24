import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();
    return (
        <>
            <center>
                <h1>Hooks in React</h1>
                <button onClick={()=>{navigate('/usestate')}}>Use State</button>&nbsp;
                <button onClick={()=>{navigate('/usereducer')}}>Use Reducer</button>&nbsp;
                <button onClick={()=>{navigate('/usecontext')}}>Use Context</button>&nbsp;
                <button onClick={()=>{navigate('/useeffect')}}>Use Effect</button>&nbsp;
                <button onClick={()=>{navigate('/usememo')}}>Use Memo</button>&nbsp;
                <button onClick={()=>{navigate('/usecb')}}>Use Callback</button>&nbsp;
                <button onClick={()=>{navigate('/useref')}}>Use Refrence</button>&nbsp;
            </center>
        </>
    )
}
export default Home;