import "/src/App.css"
import Navbars from "./components/header/Navbar"
import Footers from "./components/footer/Footer"
import Feedback from "./components/main/Feedback"
import ProductCard from "./components/main/Product"

function App() {
  
  return (
    <>
      {/* navigate navBar */}
      <header className="mx-auto container max-width p-8  ">
      <Navbars></Navbars>
      </header>
      {/* main part */}
      <main>
         <article className="text-center text-xl font-semibold text-red-500">Product</article>
         {/* display Product Card */}
         <section className="max-width container mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 p-8 ">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
         </section>
         {/* display feedback Card */}
         <h1 className="text-center text-xl text-red-600">Feedback </h1>
          <section className="max-width container mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 p-8">
          <Feedback></Feedback>
          <Feedback></Feedback>
          <Feedback></Feedback>
         </section>
      </main>
       {/* footer section */}
       <footer className="mx-auto container max-width p-8 ">
          <Footers>

          </Footers>
       </footer>
    </>
  )
}

export default App



