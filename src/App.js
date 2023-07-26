import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    return <Router>
        <Routes> 
            <Route path="/movie/:id" element = {<Detail/>}></Route>
            <Route path="/" element={<Home/>}>
            </Route>
        </Routes>
    </Router>;
}
/* <Routes> /*lookf for a route, when it finds it -> render component */
export default App;
//우와 서버사이드였으면 home 주소도 서버에서 정하는데 클라이언트 사이드는 주소도 라우터에서 정하는구나 짱이다.