export default function ButtonSidebar({image,name,event,className}) {
    return(<>
    
    <button className={className} onClick={event}>
                        <img src={image} alt="no imag" />
                       <h3>{name}</h3>
                    </button>
    </>
    );
    
}