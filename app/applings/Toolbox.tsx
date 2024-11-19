export default function Toolbox() {
  return (
    <div className="flex items-center justify-center w-full flex-wrap gap-8">
      <div className="badge menuBar h-36 flex items-center justify-center">
        <div className="bg-black w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-all">
          <div className="bg-white w-24 h-24" />
        </div>
      </div>
      <div className="badge bg-cobalt h-32 "></div>
      <div className="badge bg-cobalt h-32 "></div>
      <div className="badge bg-cobalt h-32 "></div>
    </div>
  );
}
