import { ClearOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { clear } from "../Redux/reducer";

const ClearBtn = () => {
    const dispatch = useDispatch()

    const handdleClearWorkspace = () => {
        dispatch(clear());
        console.log('+');
    }

    return ( 
        <Button onClick={handdleClearWorkspace}><ClearOutlined/>Очистити дошку</Button>
     );
}
 
export default ClearBtn;