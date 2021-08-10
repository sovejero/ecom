const CartForm = ({addOrder}) => {
  
  return (
    <div className="container container--margin">
      <form>
          <div className='cart-form'>
            <label>
              Nombre: <input type="text"/>
            </label>
            <label>
              Apellido: <input type="text"/>
            </label>
            <label>
              Telefono: <input type="text"/>
            </label>
            <label>
              Email: <input type="text"/>
            </label>
            <label>
              Repetir Email: <input type="text"/>
            </label>
            <button onClick={addOrder}>Finalizar compra</button>
          </div>
        </form>
      </div>
    )
  };

export default CartForm;
