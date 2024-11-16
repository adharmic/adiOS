export default function MenuBar() {
  return (
    <div className="opacity-0 menuBar w-full bg-sand rounded-xl border-4 border-foreground -translate-y-full flex justify-start">
      <div className="bg-coral w-fit text-4xl p-6 rounded-l-md border-r-4 border-foreground">
        adiOS
      </div>
      <div className="flex items-center ml-auto mr-4 gap-4">
        <div className="bg-coral p-2 text-4xl rounded-lg border-4 border-foreground">
          Testasdfasdf
        </div>
        <div className="bg-coral p-2 text-4xl rounded-lg border-4 border-foreground">
          Test
        </div>
        <div className="bg-coral p-2 text-4xl rounded-lg border-4 border-foreground">
          Test
        </div>
      </div>
    </div>
  );
}
