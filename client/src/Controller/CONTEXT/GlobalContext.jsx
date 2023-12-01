import React, { createContext, useState } from 'react'

const newContext = createContext()
const GlobalContext = ({children}) => {

    const [Products, setProducts] = useState([
        {id:'1',name:'Rebook Dart Men Shoe',desc:'Some quick example text to build on the card title',prise:'999',img:"https://panda-ecommerce-website-8c9860.netlify.app/images/shoes/shoe-1.png"},
        {id:'2',name:'Rebook Punk',desc:'Some quick example text to build on the card title',prise:'799',img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRve-2_nHBNoCgS3urd5lDSEjmynYHGHw1g2MO2Z9qSpZ21iw5g_43Z_08huXB5EESP9fg&usqp=CAU"},
        {id:'3',name:'Reboot All Terrain',desc:'Some quick example text to build on the card title',prise:'699',img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREmoD_JjCzwETnnyLHCFcdUERuKLxmrUBW5M1kGsuTuEVcq5ktVl0r7Gv0NfGOGYD6rQ0&usqp=CAU"}
    ])

    const [ProductBag, setProductBag] = useState([
        {id:'1.1',name:'K-Cliffs Classic',desc:'Some quick example text to build on the card title',prise:'899',img:"https://images-cdn.ubuy.co.in/64cc6a8d66d34c750b21ac38-k-cliffs-classic-water-resistant-school.jpg"},
        {id:'1.2',name:'Faux Leather',desc:'Some quick example text to build on the card title',prise:'700',img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwW14XRwngFGtFsHm0JSx0Qiom4tvkyFMFHyR8XDX65exnY8YjYh1tKK5EpmBosaEulA&usqp=CAU"},
        {id:'1.3',name:'Relaxion Bag',desc:'Some quick example text to build on the card title',prise:'499',img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtXKW8vVmdk643yJ54bSRZPTKGXSSCKD5mZMyqJhypbZyuuZduXm2tE8jSJjqXuTJHehY&usqp=CAU"}
    ])

    const [Cart, setCart] = useState([])

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart,product])
    }


  return (
    <div>
      <newContext.Provider value={{Products,ProductBag,Cart,addToCart}}>
        {children}
      </newContext.Provider>
    </div>
  )
}

export default GlobalContext
export {newContext}
