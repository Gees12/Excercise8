import Evolution from "./Evolution";
import TypeEffect from "./TypeEffect";
import Logo from "./Logo";

export default function CardInfo() {
  return (
    <div className="border rounded-lg shadow-md p-4 max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-2 text-left">Card Information</h3>
      <Logo />
      <div className="flex justify-around mt-3">
        <Evolution />
        <TypeEffect />
      </div>
    </div>
  );
}
