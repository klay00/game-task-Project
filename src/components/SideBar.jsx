import '../App.css';
import ButtonSidebar from "./buttonSidbar";


function SideBar() {

    return (
        <>
            <div className="sidebar">
                <div className="top">
                    <ButtonSidebar  path={'/'} name={'Home Page'} image={"./images/star.png"} />
                    <ButtonSidebar path={'/GamePage'} name={'Games Page'} image={"./images/catogares.png"}   />
                </div>
                <div className="down">
                    <ButtonSidebar path={'kf'} name={'Setting'} image={"./images/setting.png"} />
                    <ButtonSidebar path={'df'} name={'Help'} image={"./images/down.png"} />
                </div>
            </div>
        </>
    );
}
export default SideBar;