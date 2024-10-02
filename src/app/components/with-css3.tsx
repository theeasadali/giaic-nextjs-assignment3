import Image from "next/image";
export default function WithCSS3() {
    return(
        <section >
            <h4 className="section-heading">With CSS3</h4>
            <div className="container">
                <div className="content">
                    <p>Salam! I'm,<br /> <h1 className="name">Asad Ali!</h1></p>
                    <span className="role">A NextJs Developer</span>
                    <a href="http://linktr.ee/theeasadali" className="link-btn" target="_blank" rel="noopener noreferrer">Let's connect!</a>
                </div>

                <div>
                    <Image src={`/img/Asad Ali NextJs Developer.png`} className="profile-img" width={400} height={400} alt="Asad Ali's NextJs Devloper Image"/>
                </div>
            </div>
        </section>
    );
}