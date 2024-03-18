
import "./Bottle.css"

const Bottle = ({bottle, handleAddToCard}) => {
    const {price,name,img}=bottle;
    const styleButton= {
        backgroundColor:"gray",

    }
    return (
        <div className="bottle">
            <h2>Bottle: {name}</h2>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <button onClick={()=>handleAddToCard(bottle)} style={styleButton}>Purchase</button>

            
        </div>
    );
};

export default Bottle;