import WithCSS3 from "./with-css3";
import WithTailwindCSS from "./with-tailwindcss";
export default function Hero() {
    return(
        <>
            {/* With TailwindCSS */}
            <WithTailwindCSS />

            {/* With CSS3 */}
            <WithCSS3 />
        </>
    );
}