const DownloadSvgComponent = (svgCode : string) => {

    const downloadSVG = () => {
        const svgContent = svgCode;

        const blob = new Blob([svgContent], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'my_circle.svg'; 
        link.click();

        URL.revokeObjectURL(url);
    }

    return ( 
        <button onClick={() => downloadSVG()}>Завантажити SVG</button>
     );
}
 
export default DownloadSvgComponent;