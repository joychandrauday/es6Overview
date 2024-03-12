

const ShoppingCart = ({cart}) => {
    const {name,price}=cart
    return (
        <div>
            <h2>cart goes here:{cart.length}</h2>
            {
                cart.map(bottle => <img style={{width:'90px',margin:'5px'}} src={bottle.img}></img>)
            }
        </div>
    );
};

export default ShoppingCart;