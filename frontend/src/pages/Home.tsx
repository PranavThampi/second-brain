import { Button } from "../components/ui/Button";
import { Card, NoteType } from "../components/ui/Card";
import { Plus } from "../icons/Plus";
import { ShareOutline } from "../icons/Share";

export function Home() {
  return (
    <div className="p-10 text-white flex flex-col w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl tracking-wide font-bold">All Notes</h1>
        <div className="flex gap-4">
          <Button
            variant="secondary"
            size="lg"
            text="Share Brain"
            startIcon={<ShareOutline size="sm" color="fill-indigo-500" />}
          />
          <Button
            variant="primary"
            size="lg"
            text="Add content"
            startIcon={<Plus size="sm" color="fill-white" />}
            data-dropdown-toggle="dropdown"
          />
          <div
            id="dropdown"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pt-8 flex flex-wrap gap-6">
        <Card noteType={NoteType.documents} title="test title" content={<div>Test content</div>} tags={["sometag1", "sometag2"]} createdDate={'Added on 10/03/2024'} />
      </div>
    </div>
  );
}
