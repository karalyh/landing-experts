import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import  '@material-tailwind/react';
export default function  LandingLayout ({ children }: any){
    return (
        <div>
        <div className="flex flex-col">
           <Navbar />
            <Header />
            { children }
            <Footer />
        </div>
        </div>
    )
}

