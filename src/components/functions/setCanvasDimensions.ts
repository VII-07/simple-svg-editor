// canvasHelpers.ts
const setCanvasDimensions = (canvas: fabric.Canvas | null, parentId: string) => {
  const parentDiv = document.getElementById(parentId);
  if (parentDiv && canvas) {
    canvas.setDimensions({
      width: parentDiv.clientWidth,
      height: parentDiv.clientHeight
    });
  }
};

export default setCanvasDimensions;
