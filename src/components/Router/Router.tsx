import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import StartPage from "../StartPage/StartPage";
import Workspace from "../Workspace/Workspace";

const Routers = () => {
    return ( 
        <Router>
                <Routes>
                    <Route path="/" element={<StartPage/>}/>
                    <Route path="/workspace" element={< Workspace/>}/>
                </Routes>
        </Router>
     );
}
 
export default Routers;