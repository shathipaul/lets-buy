import Image from "next/image";
import img1 from "../../public/images/slider/3.jpg"

function Slide() {
    return (
        <div className="grid md:grid-cols-2">
            <div className="image pr-5">
                <Image src={img1} width={600} height={600} className="rounded-lg" alt="" />
            </div>
            <div className="info flex flex-col justify-center">

                <div className="title">
                    <h2 className="text-3xl md:text-5xl font-bold">Your most unhappy customers are your greates source of learning</h2>
                </div>
                <p className="text-gray-500 py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate illum amet tempore harum, tempora repellat vel saepe blanditiis iusto assumenda odit quam libero officiis, recusandae laudantium! Tenetur commodi ipsum quos!</p>

                {/* <Author /> */}
            </div>
        </div>
    )
}

export default Slide;