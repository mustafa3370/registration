
import { Outlet } from 'react-router';
import Footer from './../Footer/Footer';

function Layout() {
    return <>
   
    <Outlet/>
    <Footer/>
    </>
}

export default Layout
