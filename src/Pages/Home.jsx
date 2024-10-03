import Header from "../Components/Header"
import Hero from "../Components/Hero";
import FlashSales from "../Components/FlashSales";
import BrowseByCategory from "../Components/BrowseByCategory";
import BestSellingProducts from "../Components/BestSellingProducts";
import Banner from "../Components/Banner";
import ExploreOurProducts from "../Components/ExploreOurProducts";
import NewArrival from "../Components/NewArrival";
import Services from "../Components/Services";
import Footer from "../Components/Footer";
export default function Home() {
  return (
    <>
     <Header />
      <Hero />
      <FlashSales />
      <BrowseByCategory />
      <BestSellingProducts />
      <Banner />
      <ExploreOurProducts />
      <NewArrival />
      <Services />
      <Footer />
    </>
  )
}
