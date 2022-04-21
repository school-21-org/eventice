import { Avatar } from "antd";

export default function Header() {
    return (
        <header className="bg-violet-400 text-white rounded-b-lg select-none flex flex-row justify-between align-middle px-4 py-2">
            <p className="mb-0">My Materials</p>
            <p className="mb-0">Gallery</p>
            <p className="mb-0 font-bold text-xl">Eva Elfi</p>
            <p className="mb-0">Holygraph</p>
            <Avatar></Avatar>
        </header>
    )
}
