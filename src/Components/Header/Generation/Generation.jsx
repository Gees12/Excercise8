import Gen1 from "./Gen1";
import Gen2 from "./Gen2";
import Gen3 from "./Gen3";
import Gen4 from "./Gen4";

export default function Generations() {
  return (
    <div className="grid grid-cols-2 gap-2 bg-white text-blue-700 rounded-lg p-4 shadow">
      <Gen1 />
      <Gen2 />
      <Gen3 />
      <Gen4 />
    </div>
  );
}
