import Link from "next/link";
import { ImTwitter, ImFacebook, ImLinkedin2, ImWhatsapp } from "react-icons/im";
function Footer() {
    return (
        <footer className="footer items-center py-6 px-8 bg-gray-700 text-neutral-content">
            <p>Copyright © 2023 - All right reserved by Shathi Paul</p>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <div className="flex gap-6">
                    <Link href="#"><ImFacebook color="#3b5998" className="h-5 w-5" /></Link>
                    <Link href="#"><ImTwitter color="#00acee" className="h-5 w-5" /></Link>
                    <Link href="#"><ImLinkedin2 color="#0072b1" className="h-5 w-5" /></Link>
                    <Link href="#"><ImWhatsapp color="#25D366" className="h-5 w-5" /></Link>
                </div>
            </div>
        </footer>


    )
}

export default Footer;