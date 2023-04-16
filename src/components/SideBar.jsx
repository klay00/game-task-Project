import '../App.css';
import ButtonSidebar from "./buttonSidbar";


function SideBar() {

    return (
        <>
            <div className="sidebar">
                <div className="top">
                    <ButtonSidebar path={'/'} name={'Home Page'} image={"./images/star.png"} className={''}  />
                    <ButtonSidebar path={'/GamePage'} name={'Games Page'} image={"./images/catogares.png"}  className={''} />
                </div>
                <div className="down">
                    <ButtonSidebar path={'kf'} name={'Setting'} image={"./images/setting.png"}  className={''} />
                    <ButtonSidebar path={'df'} name={'Help'} image={"./images/down.png"}  className={''} />
                </div>
            </div>
        </>
    );
}
export default SideBar;