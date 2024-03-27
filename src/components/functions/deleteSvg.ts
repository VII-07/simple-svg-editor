export const handleDeleteSVG = (canvas: fabric.Canvas | null) => {
    canvas?.on('mouse:down', function () {
      window.addEventListener('keydown', function (e) {
          if ((e.key === 'Delete' || e.key === 'Backspace') && (e.target as Node).nodeName !== 'INPUT') {
            const activeObjects = canvas?.getActiveObjects();
            activeObjects?.forEach(function (object) {
              canvas?.remove(object);
            });
            canvas?.discardActiveObject().renderAll();
          }
        });
    });
  };
  