import React from "react";

function Cardes() {
    const product=([
        {
            image: "https://wallpaper.dog/large/17112707.jpg",
        }, {
            image: "https://wallpaper.dog/large/10910251.jpg",
        }, {
            image: "https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f",
        }, {
            image: "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png",
        }, {
            image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/718Ywqjoj6L.jpg",
        }, {
            image: "https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7",
        }, {
            image: "https://image.api.playstation.com/vulcan/ap/rnd/202208/3011/6XEXTBk1DQhF0xWB4rE0AGKU.png",
        }, {
            image: "https://cdn1.epicgames.com/salesEvent/salesEvent/GRT_STD_Edition_Store_Portrait_1200x1600_1200x1600-b08ee70d85ee2649b6e9c575d9192e66?h=480&quality=medium&resize=1&w=360",
        }, {
            image: "https://image.api.playstation.com/vulcan/ap/rnd/202211/1717/6Of7qTgej2FBAKH0xZ1ZFEi7.png",
        }, {
            image: "https://wallpaper.dog/large/17112707.jpg",
        }, {
            image: "https://wallpaper.dog/large/10910251.jpg",
        }, {
            image: "https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f",
        }, {
            image: "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png",
        }, {
            image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/718Ywqjoj6L.jpg",
        }, {
            image: "https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7",
        }, {
            image: "https://image.api.playstation.com/vulcan/ap/rnd/202208/3011/6XEXTBk1DQhF0xWB4rE0AGKU.png",
        }, {
            image: "https://cdn1.epicgames.com/salesEvent/salesEvent/GRT_STD_Edition_Store_Portrait_1200x1600_1200x1600-b08ee70d85ee2649b6e9c575d9192e66?h=480&quality=medium&resize=1&w=360",
        }, {
            image: "https://image.api.playstation.com/vulcan/ap/rnd/202211/1717/6Of7qTgej2FBAKH0xZ1ZFEi7.png",
        },
    ]);
    return (
        <>
            <div className="scroll-container">
                {

                    product.map(item => {
                        return (
                            <img className="scroll-content" src={item.image} alt="no image" />
                        );
                    })
                }</div>
        </>
    );
}
export default Cardes;