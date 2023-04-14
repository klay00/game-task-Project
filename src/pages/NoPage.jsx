import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";


export default function NoPage(){
    return(
    
    <>
    <NavBar/>
    <div className="in-pages">
        <SideBar/>
        <div className="page-not-found">

          <h1 >Page not found :(</h1>

        </div>
        </div>
        
        
    </>
      
    );
}