import { ClearOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import { useDispatch } from "react-redux";
import { clear } from "../Redux/svgReducer";
import { SvgResizerProps } from "../Workspace/WorkspaceContent/WorkspaceContent";

const ClearBtn = ({canvas} : SvgResizerProps) => {
    const dispatch = useDispatch()

    const handdleClearWorkspace = () => {
        dispatch(clear());
        localStorage.removeItem('canvas');
        if(canvas.current) {
            canvas.current.clear();
        }
        message.success('Workspace clear');
        
    }

    return ( 
        <Button onClick={handdleClearWorkspace}><ClearOutlined/>Очистити дошку</Button>
     );
}
 
export default ClearBtn;