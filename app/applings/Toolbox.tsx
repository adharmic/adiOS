import Tool from "../components/Tool";
import Tools from "../data/Tools.json";

export default function Toolbox() {
  return (
    <div className="flex w-fit items-center justify-center flex-wrap gap-8 text-black flex-col">
      <div className="border-b-2 border-black">
        <p>
          The Toolbox is a list of software I use for my creative processes.
        </p>
      </div>
      <div className="flex w-fit items-center justify-center flex-wrap gap-8">
        {Tools.tools.map((tool, index) => {
          return (
            <Tool
              key={index}
              name={tool.name}
              icon={tool.icon}
              familiarity={tool.familiarity}
            />
          );
        })}
      </div>
    </div>
  );
}
