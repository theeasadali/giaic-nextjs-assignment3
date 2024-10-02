import Link from "next/link";
import Image from "next/image";
export default function Footer() {
    return(
        <footer className="py-8 text-white bg-blue-500 shadow-sm">
            <div className="flex justify-between items-center w-4/5 mx-auto ">
                <div className="flex flex-col gap-6">
                    <Link href="/"><Image src={`/img/My\ Sign.svg`} alt="theeasadali logo" className="bg-white rounded-full p-6" height={80} width={80}/></Link>
                    &copy; 2024 theeasadali. All rights reserved.
                </div>
                <div className="footer-links flex flex-col gap-6">
                    <Link href={`/`}>Home</Link>
                    <Link href={`/about-me`}>About me</Link>
                    <Link href={`/portfolio`}>Portfolio</Link>
                    <Link href={`https://linktr.ee/theeasadali`}>Contact me</Link> 
                </div>
            </div>
        </footer>
    );
}