import Link from "next/link";

function Cards({ product }) {
    const { id, title, price, image: img, description } = product;
    console.log(product)
    return (
        <div className="card card-compact w-96 bg-base-100 border shadow-xl">
            <figure>
                <img src={img} className="w-40 h-52 py-3" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title.slice(0, 30)}</h2>
                <p>{description.slice(0, 100)}</p>
                <p className='font-bold text-lg'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link href={`/products/${id}`}>
                        <button className="btn btn-primary">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cards;