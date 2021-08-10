import './CartForm.css';

const CartForm = ({addOrder}) => {
  
  return (
    <div className="container container--margin">
      <form>
          <div className='cart-form'>
            <label placeholder="Enter your name...">Name:
              <input className="form__input" type="text"/>
            </label>
            
            <label placeholder="Enter your name...">Surname:
              <input className="form__input" type="text"/>
            </label>

            <label placeholder="Enter your name...">Phone:
              <input className="form__input" type="text"/>
            </label>

            <label placeholder="Enter your name...">Email:
              <input className="form__input" type="text"/>
            </label>

            <label placeholder="Enter your name...">Repeat Email:
              <input className="form__input" type="text"/>
            </label>

            <button className="form__button" onClick={addOrder}>Submit order</button>
          </div>
        </form>
      </div>
    )
  };

export default CartForm;
