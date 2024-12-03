import Image from "next/image";

type WindowControlButtonsProps = {
  close: () => void;
};

export default function WindowControlButtons({
  close,
}: WindowControlButtonsProps) {
  return (
    <div className="flex flex gap-4">
      <button
        className="w-12 glass !rounded-full flex items-center justify-center aspect-square !bg-[#9b1e00]/80 hover:!bg-[#9b1e00] transition-all"
        onClick={() => {
          close();
        }}
      >
        <Image src="/close.svg" alt="close" width={40} height={40} />
      </button>
    </div>
  );
}
