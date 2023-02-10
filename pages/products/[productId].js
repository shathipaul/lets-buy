import Format from "@/layout/format";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


function Product() {
    const [cart, setCart] = useState()
    const [products, setProducts] = useState()

    const router = useRouter()
    const { productId } = router.query

    useEffect(() => {
        if (!router.isReady) return
        fetch(`/api/products/${productId}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [router.isReady])
    if (!products) return <>Loading...</>


    const handleAddToCart = (product) => {
        const getProduct = localStorage.getItem('product')
        const savedProduct = JSON.parse(getProduct)
        console.log(savedProduct)
        if (!savedProduct) {
            const variable = [product]
            localStorage.setItem('product', JSON.stringify(variable))
        } else {
            setCart(savedProduct)
            const findProduct = cart?.find(items => items.id === product.id)

            if (findProduct) {
                return
            }
            else {
                const allProduct = [...savedProduct, product]
                localStorage.setItem('product', JSON.stringify(allProduct))
            }

        }





        console.log(product)
        console.log(getProduct)
    }

    return (
        <Format>
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h2 className="text-xl font-bold leading-none sm:text-3xl">
                        {products.title}
                    </h2>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">
                        {products.description}
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <button
                            onClick={() => handleAddToCart(products)}
                            className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
                            Add to cart
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={products.image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </Format>

    )
}

export default Product;
