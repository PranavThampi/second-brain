import { DocumentFilled, DocumentOutline } from "../../icons/Document";
import { LinkIcon } from "../../icons/Link";
import { Logo } from "../../icons/Logo";
import { Tag } from "../../icons/Tag";
import { TwitterFilled, TwitterOutline } from "../../icons/Twitter";
import { VideoFilled, VideoOutline } from "../../icons/Video";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="h-screen bg-neutral-950 flex flex-col w-72 p-4 text-white">
      <Link to="/">
        <div className="flex items-center">
          <Logo size="lg" color="fill-indigo-700" />
          <span className="text-2xl pl-4">Second Brain</span>
        </div>
      </Link>

      <div className="mt-12">
        <Link to="/tweets">
          <div className="flex group p-2 rounded-lg items-center transition-all ease-in-out hover:scale-110 hover:bg-gray-900 my-2">
            <span className="group-hover:hidden">
              <TwitterOutline size="md" color="fill-indigo-700" />
            </span>
            <span className="hidden group-hover:block">
              <TwitterFilled size="md" color="fill-indigo-700" />
            </span>
            <span className="px-4 text-lg">Tweets</span>
          </div>
        </Link>

        <Link to="/videos">
          <div className="flex group p-2 rounded-lg items-center transition-all ease-in-out hover:scale-110 hover:bg-gray-900 my-2">
            <span className="group-hover:hidden">
              <VideoOutline size="md" color="fill-indigo-700" />
            </span>
            <span className="hidden group-hover:block">
              <VideoFilled size="md" color="fill-indigo-700" />
            </span>
            <span className="px-4 text-lg">Videos</span>
          </div>
        </Link>

        <Link to="/documents">
          <div className="flex group p-2 rounded-lg items-center transition-all ease-in-out hover:scale-110 hover:bg-gray-900 my-2">
            <span className="group-hover:hidden">
              <DocumentOutline size="md" color="fill-indigo-700" />
            </span>
            <span className="hidden group-hover:block">
              <DocumentFilled size="md" color="fill-indigo-700" />
            </span>
            <span className="px-4 text-lg">Documents</span>
          </div>
        </Link>

        <Link to="/links">
          <div className="flex group p-2 rounded-lg items-center transition-all ease-in-out hover:scale-110 hover:bg-gray-900 my-2">
            <span className="">
              <LinkIcon size="md" color="fill-indigo-700" />
            </span>
            <span className="px-4 text-lg">Links</span>
          </div>
        </Link>

        <Link to="/tags">
          <div className="flex group p-2 rounded-lg items-center transition-all ease-in-out hover:scale-110 hover:bg-gray-900 my-2">
            <span className="">
              <Tag size="md" color="fill-indigo-700" />
            </span>
            <span className="px-4 text-lg">Tags</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
