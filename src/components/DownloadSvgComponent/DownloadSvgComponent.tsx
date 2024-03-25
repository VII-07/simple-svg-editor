import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useSelector } from 'react-redux';
import { CanvasSvgState } from "../Redux/downloadSvgReducer";

type RootState = {
    canvasSvg: CanvasSvgState;
  };

const DownloadSvgComponent = () => {
  const svgString = useSelector((state: RootState ) => state.canvasSvg.svg);

  const downloadSVG = () => {
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'download.svg'; 
    link.click();

    URL.revokeObjectURL(url);
  }

  return ( 
    <Button onClick={downloadSVG} icon={<DownloadOutlined />}>Завантажити файл</Button>
  );
}
 
export default DownloadSvgComponent;
