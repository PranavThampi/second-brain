import { Button } from "../components/ui/Button";
import { Plus } from "../icons/Plus";
import { ShareOutline } from "../icons/Share";

export function Home() {
  return (
    <div className="p-12 text-white flex flex-col w-screen">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl tracking-wide font-bold">All Notes</h1>
        <div className="flex gap-4">
          <Button variant="secondary" size="lg" text="Share Brain" startIcon={<ShareOutline size="sm" color="fill-indigo-500"/>} />
          <Button variant="primary" size="lg" text="Add content" startIcon={<Plus size="sm" color="fill-white" />}/>
        </div>
      </div>
    </div>
  );
}
