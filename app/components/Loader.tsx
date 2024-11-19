export default function Loader() {
  return (
    <div className="absolute loader flex flex-col w-screen h-screen items-center justify-center bg-[rgba(0,0,0,0.4)] z-90">
      <div className="window w-full h-full flex flex-col items-center justify-center">
        <div className="heading p-4 mt-16 justify-center items-center flex">
          <div className="title text-5xl flex items-center justify-center text-center">
            <h1>Welcome to AdiOS.</h1>
          </div>
        </div>
        <div className="content w-full h-full p-4 flex flex-col justify-center items-center text-white gap-8">
          <div className="text-4xl">Loading</div>
          <div className="glass progress border-0 border-white !rounded-none w-3/4 h-16 p-2 flex gap-2 lg:w-1/2">
            {new Array(12).fill(null).map((_, index) => {
              return (
                <div
                  key={index}
                  className="scale-0 progress-block w-1/12 h-full bg-lavender "
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
