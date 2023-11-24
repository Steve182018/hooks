import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './Component/home';
import UseStateExa from './Component/usestateexe';
import UseEffectExa from './Component/useeffectexe';
import UseMemoExa from './Component/usememoexe';
import UseCBExa from './Component/usecbexe';
import UseRefExa from './Component/userefexe';
import UseReducerExa from './Component/usereducerexe';
import UseContextExa from './Component/usecontextexe';
import Simple_Context from './Component/simple_Context';
// import MyApp from './Component/Context/Masterc';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/usestate' element={<UseStateExa/>}></Route>
        <Route path='/useeffect' element={<UseEffectExa/>}></Route>
        <Route path='/usememo' element={<UseMemoExa/>}></Route>
        <Route path='/usecb' element={<UseCBExa/>}></Route>
        <Route path='/useref' element={<UseRefExa/>}></Route>
        <Route path='/usereducer' element={<UseReducerExa/>}></Route>
        <Route path='/usecontext' element={<UseContextExa/>}></Route>
        <Route path='/simple_context' element={<Simple_Context/>}></Route>
        {/* <Route path='/myapp' element={<MyApp/>}></Route> */}
      </Routes>
    </BrowserRouter>
      {/* <Counter/><br/><br/>
      <Text/><br/><br/>
      <Age/><br/><br/>
      <Form/> */}
    </>
  );
}

export default App;
