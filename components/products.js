import Link from 'next/link';
import useSWR from 'swr'

const fetcher = async () => {
    const response = await fetch('/api/products')
    const data = await response.json()
    return data.slice(0, 6);
}

function Products() {
    const { data, error } = useSWR('products', fetcher)

    if (error) return 'An error has occurred'
    if (!data) return 'Loading...'

    return (
        <section className="container mx-auto md:px-10 py-10">
            <h2 className="font-bold text-4xl py-12 text-center">Latest Products</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    data.map(p => {
                        return (
                            <div key={p.id}>
                                <div className="card card-compact w-96 bg-base-100 border shadow-xl">
                                    <figure>
                                        <img src={p.image} className="w-40 h-52 py-3" alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{p.title.slice(0, 30)}</h2>
                                        <p>{p.description.slice(0, 100)}</p>
                                        <p className='font-bold text-lg'>Price: ${p.price}</p>
                                        <div className="card-actions justify-end">
                                            <Link href={`/products/${p.id}`}>
                                                <button className="btn btn-primary">Buy Now</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }


            </div>
            <div className='flex justify-center mt-10'>
                <Link href='/products'><button className="btn btn-wide">View all products</button></Link>
            </div>
        </section>
    )
}

export default Products;