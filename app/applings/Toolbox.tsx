import Tool from "../components/Tool";
import Tools from "../data/Tools.json";

export default function Toolbox() {
  return (
    <div className="flex items-center justify-center w-full flex-wrap gap-8">
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
  );
}
