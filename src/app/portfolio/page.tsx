import Footer from "../components/footer";
import Header from "../components/header";

export default function Page() {
    return(
        <>
            <Header />
            <main className="py-32 w-4/5 mx-auto flex flex-col gap-5">
                <h1 className="text-blue-500 text-7xl">Portfolio</h1>
                <p className="text-sm text-2xl text-blue-300">Projects coming soon! Hang tight.</p>
            </main>
            <Footer />
        </>
    );
}