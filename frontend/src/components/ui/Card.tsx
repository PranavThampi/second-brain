import { ReactElement } from "react"
import { TwitterOutline } from "../../icons/Twitter";
import { VideoOutline } from "../../icons/Video";
import { DocumentOutline } from "../../icons/Document";
import { LinkIcon } from "../../icons/Link";
import { ShareOutline } from "../../icons/Share";
import { DeleteOutline } from "../../icons/Delete";

export const enum NoteType {
    tweets,
    videos,
    documents,
    links
}

interface CardProps {
    noteType: NoteType,
    title: String
    content: ReactElement,
    tags: String[],
    createdDate: String
}

const iconSize = "sm"
const iconColor = "fill-indigo-700"

const noteTypeIcons: Record<NoteType, ReactElement> = {
    [NoteType.tweets]: <TwitterOutline size={iconSize} color={iconColor} />,
    [NoteType.videos]: <VideoOutline size={iconSize} color={iconColor} />,
    [NoteType.documents]: <DocumentOutline size={iconSize} color={iconColor} /> ,
    [NoteType.links]: <LinkIcon size={iconSize} color={iconColor} /> ,
  };

export function Card (props: CardProps) {
    return (
        <div className="flex flex-col p-4 text-white border border-neutral-900 rounded-lg bg-neutral-950 w-64 md:w-72 h-72">
            <div className="flex justify-between items-center">
                <span className="gap-2 flex">
                    {noteTypeIcons[props.noteType]}
                    <span className="text-lg">{props.title}</span>
                </span>
                <span className="flex gap-2">
                    <ShareOutline size={iconSize} color={iconColor} />
                    <DeleteOutline size={iconSize} color={iconColor} />
                </span>
            </div>
            <div className="px-1">
                <div className="py-2">
                    {props.content}
                </div>
                <div className="flex gap-1 py-2">
                    {props.tags.map((tag) => (
                        <span className="text-indigo-500 bg-indigo-900 rounded-full p-1 px-2 text-xs">
                            #{tag}
                        </span>
                    ))}
                </div>
                <div className="pt-2 text-gray-500 text-xs">
                    {props.createdDate}
                </div>
            </div>
        </div>
    )
    
}