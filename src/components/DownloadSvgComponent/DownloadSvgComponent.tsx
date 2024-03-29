import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";

const DownloadSvgComponent = () => {

    const downloadSVG = () => {
        const svgContent = '<svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><path fill-rule="nonzero" d="M256 0c70.69 0 134.69 28.66 181.02 74.98C483.34 121.31 512 185.31 512 256c0 70.69-28.66 134.69-74.98 181.02C390.69 483.34 326.69 512 256 512c-70.69 0-134.69-28.66-181.02-74.98C28.66 390.69 0 326.69 0 256c0-70.69 28.66-134.69 74.98-181.02C121.31 28.66 185.31 0 256 0zm147.19 108.81C365.52 71.15 313.48 47.85 256 47.85c-57.48 0-109.52 23.3-147.19 60.96C71.15 146.48 47.85 198.52 47.85 256c0 57.48 23.3 109.52 60.96 147.19 37.67 37.66 89.71 60.96 147.19 60.96 57.48 0 109.52-23.3 147.19-60.96 37.66-37.67 60.96-89.71 60.96-147.19 0-57.48-23.3-109.52-60.96-147.19z"/></svg>';

        const blob = new Blob([svgContent], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'my_circle.svg'; 
        link.click();

        URL.revokeObjectURL(url);
    }

    return ( 
        <Button onClick={downloadSVG} icon={<DownloadOutlined />}>Завантажити файл</Button>
     );
}
 
export default DownloadSvgComponent;