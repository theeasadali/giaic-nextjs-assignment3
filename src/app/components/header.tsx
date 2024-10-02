import Link from "next/link";
import Image from "next/image";
export default function Header() {
    return(
        <header className="py-3 bg-white text-blue-500 shadow-sm">
            <div className="w-4/5 mx-auto flex justify-between items-center">
                <Link href="/"><Image src={`/img/My\ Sign.svg`} alt="theeasadali logo" height={40} width={40}/></Link>
                <nav className="flex gap-6">
                    <Link href={`/`} className="transition-colors duration-300 hover:text-blue-900">Home</Link>
                    <Link href={`/about-me`} className="transition-colors duration-300 hover:text-blue-900">About me</Link>
                    <Link href={`/portfolio`} className="transition-colors duration-300 hover:text-blue-900">Portfolio</Link>
                    <Link href={`https://linktr.ee/theeasadali`} className="transition-colors duration-300 hover:text-blue-900">Contact me</Link>
                </nav>
            </div>
        </header>
    )
}