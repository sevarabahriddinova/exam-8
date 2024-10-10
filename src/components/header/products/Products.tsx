// import { useGetProductsQuery } from "../../../redux/api/products"
// import { useEffect, useState } from "react"
// import { type Product } from "../../../types"

// const Products = () => {
//     const [products, setProducts] = useState<Product[]>([])
//     const { data } = useGetProductsQuery(undefined)

//     useEffect(() => {
//         if (data) {   
//             console.log(data)
//             setProducts(data.slice(0, 7))  
//         }
//     }, [data])

//     return (
//         <div>
//             {products.length > 0 ? (
//                 products.map((product) => (
//                     <div key={product.id}> 
//                         <h1>{product.name}</h1>
//                     </div>
//                 ))
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     )
// }

// export default Products
