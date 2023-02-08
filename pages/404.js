import Image from "next/image";
import Link from "next/link";
import img from "../public/images/error/1.png"
function PageNotFound() {
    return (
        <div className="flex flex-col items-center py-5">
            <Image src={img} width={700} height={500} alt="" />
            <Link href="/">
                <button className="btn btn-wide">Go to home</button>
            </Link>
        </div>
    )
}

export default PageNotFound;