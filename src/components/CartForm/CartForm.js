import './CartForm.css';
import { useState, useEffect } from 'react';

const CartForm = ({addOrder}) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email:'',
    [`repeat email`]:''
  });
  const [validated, setValidated] = useState(false);
  
  const formDisabled = Object.values(formData).includes('');
 
  const onFormInput = (e) => {
    console.log(formData);
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validated){
      addOrder(formData);
    }
  }

  useEffect(() => {
    const validate = (formData) => {
      if(formData.email!=='') {
        return formData.email===formData[`repeat email`];
      }
      return false;
    };
    
    setValidated(validate(formData));
  }, [formData]);


  return (
    <div className="container container--margin">
      <form>
          <div className='cart-form'>
            {Object.keys(formData).map( (inputName, index) =>
            <label key={index} className="form__label">{inputName}
              <input name={inputName} className="form__input" type="text" required="required" onChange={onFormInput}/>
            </label>
            )}

            {!validated ? <div className="form__error">Emails don't match</div> : null }

            <button disabled={formDisabled} className="form__button" onClick={handleSubmit}>Submit order</button>
          </div>
        </form>
      </div>
    )
  };

export default CartForm;
