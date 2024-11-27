import Image from "next/image";

interface ToolProps {
  name: string;
  icon: string;
  familiarity: number;
}

export default function Tool({ name, icon }: ToolProps) {
  return (
    <div className="badge menuBar h-32 flex items-center justify-center">
      <div className="w-full h-full flex items-center justify-center transition-all">
        <div className="w-20 aspect-square">
          <Image src={icon} height={400} width={400} alt={name} />
        </div>
      </div>
    </div>
  );
}
