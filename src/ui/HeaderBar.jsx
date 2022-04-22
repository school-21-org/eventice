import { Avatar } from "antd";

export default function Header() {
    return (
        <header className="bg-violet-400 text-white rounded-b-lg select-none grid grid-cols-12 py-2 px-4">
            <p className="mb-0 col-span-5">Gallery</p>
            <p className="mb-0 col-span-2 font-bold text-xl">Eventice</p>
            <p className="mb-0 col-span-2">Holygraph</p>
            <Avatar></Avatar>
        </header>
    )
}
