import Hero from '@/components/hero'
import Products from '@/components/products'
import Format from '@/layout/format'



export default function Home() {
  return (
    <Format>
      <Hero />
      <Products />
    </Format>
  )
}
