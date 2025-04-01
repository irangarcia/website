import { DynamicIsland } from "@/components/dynamic-island";

export default function Page() {
  return (
    <div>
      <h1>Dynamic Island</h1>
      <div className="flex flex-col mt-20">
        <div className="rounded-lg border border-slate-200 bg-white py-16 p-4 h-[480px]">
            <DynamicIsland />
        </div>
      </div>
    </div>
  );
}