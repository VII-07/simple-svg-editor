import { ClearOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import { useDispatch } from "react-redux";
import { clear } from "../Redux/svgReducer";

const ClearBtn = () => {
    const dispatch = useDispatch()

    const handdleClearWorkspace = () => {
        dispatch(clear());
        message.success('Workspace clear');
    }

    return ( 
        <Button onClick={handdleClearWorkspace}><ClearOutlined/>Очистити дошку</Button>
     );
}
 
export default ClearBtn;