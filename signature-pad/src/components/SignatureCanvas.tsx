import { useSignatureCanvas } from "../hooks/useSignatureCanvas";

export default function SignatureCanvas() {
  const { canvasRef, startDrawing, draw, endDrawing, clearCanvas, saveImage } =
    useSignatureCanvas();

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    startDrawing(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    draw(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        className="border border-gray-400 bg-white rounded-lg shadow-md cursor-crosshair"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={endDrawing}
        onMouseLeave={endDrawing}
      />
      <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={clearCanvas}
          className="w-24 px-4 py-2 text-white bg-red-300 rounded-lg shadow cursor-pointer 
          border border-transparent hover:border-red-400 transition"
        >
          지우기
        </button>
        <button
          onClick={saveImage}
          className="w-24 px-4 py-2 text-white bg-blue-300 rounded-lg shadow cursor-pointer 
          border border-transparent hover:border-blue-400 transition"
        >
          저장하기
        </button>
      </div>
    </div>
  );
}
