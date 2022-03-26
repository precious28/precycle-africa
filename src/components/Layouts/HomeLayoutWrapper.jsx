import PrecycleFooter from "../Footer/Footer";
import PrecycleNav from "../Navbar/PrecycleNav";

export default function HomeLayoutWrapper({children}) {
  return (
    <>
      <PrecycleNav />
        {children}
      <PrecycleFooter />
    </>
  )
}