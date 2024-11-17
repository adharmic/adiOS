import Image from "next/image";

type WindowControlButtonsProps = {
  close: () => void;
  toggleMaximize: () => void;
  isMaximixed: boolean;
};

export default function WindowControlButtons({
  close,
  toggleMaximize,
  isMaximixed,
}: WindowControlButtonsProps) {
  return (
    <div className="flex flex gap-4">
      <button
        className="w-12 glass !rounded-full flex items-center justify-center aspect-square !bg-[#75b600]/40 border-4 border-foreground hover:!bg-[#75b600] transition-all"
        onClick={() => {
          toggleMaximize();
        }}
      >
        {isMaximixed ? (
          <Image
            src="/unmaximize.svg"
            alt="unmaximize"
            width={30}
            height={30}
          />
        ) : (
          <Image src="/maximize.svg" alt="maximize" width={30} height={30} />
        )}
      </button>
      <button
        className="w-12 glass !rounded-full flex items-center justify-center aspect-square !bg-[#9b1e00]/40 border-4 border-foreground hover:!bg-[#9b1e00] transition-all"
        onClick={() => {
          close();
        }}
      >
        <Image src="/close.svg" alt="close" width={40} height={40} />
      </button>
    </div>
  );
}
