import Cards from '@/components/_child/cards'
import Format from '@/layout/format'
import useSWR from 'swr'

const fetcher = async () => {
    const response = await fetch('/api/products')
    const data = await response.json()
    return data;
}
function ProductList() {
    const { data, error } = useSWR('products', fetcher)

    if (error) return 'An error has occurred'
    if (!data) return 'Loading...'
    return (
        <Format>
            <div className="container mx-auto md:px-10 py-10">
                <h2 className="font-bold text-4xl pb-12 text-center">All Products</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        data.map(product => {
                            return (
                                <div key={product.id}>
                                    <Cards
                                        product={product}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Format>
    )
}

export default ProductList;