export default function Contact() {
  return (
    <div className="w-[600px] max-w-full max-h-full text-black flex flex-col gap-4">
      <div className="flex flex-col">
        <label className="font-bold text-xl">Name</label>
        <input className="border border-cobalt p-2"></input>
      </div>
      <div className="flex flex-col">
        <label className="font-bold text-xl">E-mail</label>
        <input className="border border-cobalt p-2"></input>
      </div>
      <div className="flex flex-col">
        <label className="font-bold text-xl">Message</label>
        <textarea className="border border-cobalt p-2"></textarea>
      </div>
      <button className="menuBar p-2 w-fit text-white font-bold">
        Submit!
      </button>
    </div>
  );
}
