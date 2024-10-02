import Image from "next/image"
export default function WithTailwindCSS() {
    return(
        <section className="py-20">
            <h4 className="font-bold text-lg text-blue-500 gap-8 flex-row">With TailwindCSS</h4>
            <div className="flex justify-between items-center">
                <div className="flex flex-col w-1/2 transition-all duration-300 hover:-translate-y-4 bg-blue-700 rounded-2xl text-orange-50 p-20 text-2xl hover:shadow-xl">
                    <p>Salam! I'm,<br /> <h1 className="text-8xl font-bold text-white py-1">Asad Ali!</h1></p>
                    <span className="tracking-widest">A NextJs Developer</span>
                    <a href="http://linktr.ee/theeasadali" className="bg-blue-400 max-w-max py-2 px-5 my-5 rounded-lg transition-all duration-300 hover:bg-blue-500 " target="_blank" rel="noopener noreferrer">Let's connect!</a>
                </div>
                <div>
                    <Image src={`/img/Asad Ali NextJs Developer.png`} className="rounded-2xl border-[3px] border-blue-700 transition-all duration-300 hover:-translate-y-4" width={400} height={400} alt="Asad Ali's NextJs Devloper Image"/>
                </div>
            </div>
        </section>
    )
}