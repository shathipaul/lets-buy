import ProductId from "@/components/_child/productId";
import { useRouter } from "next/router";
import useSWR from 'swr'



// const fetcher = async (productsId) => {
//     const response = await fetch(`/api/products/${productsId}`)
//     const data = await response.json()
//     console.log(data)
//     return data;
// }

function Product() {
    const router = useRouter()
    const { productsId } = router.query

    console.log(productsId)

    const fetcher = async () => {
        const response = await fetch(`/api/products/${productsId}`)
        const data = await response.json()
        console.log(data)
        return data;
    }
    const { data, error } = useSWR('products', fetcher)

    if (error) return 'An error has occurred'
    if (!data) return 'Loading...'
    return (
        <>
            {/* {
                products.map(product => {
                    return (
                        <div key={product.id}>
                            <ProductId />
                        </div>

                    )
                })
            } */}
        </>
    )
}

export default Product;

// export async function getServerSideProps(context) {
//     const { params } = context
//     const { productsId } = params
//     const response = await fetch(`/api/products/${productsId}`)
//     const data = response.json()

//     return {
//         props: {
//             products: data,
//         }
//     }
// }