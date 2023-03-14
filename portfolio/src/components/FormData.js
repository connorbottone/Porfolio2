
import { useState } from 'react';
import { send } from 'emailjs-com';
import '../styles/dataform.css'

const FormData = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();

    setErrors({});
    if (!toSend.reply_to || !/\S+@\S+\.\S+/.test(toSend.reply_to)) {
      setErrors((prev) => ({ ...prev, reply_to: 'Please enter a valid email address' }));
      return;
    }

    if (!toSend.message || toSend.message.length <= 10) {
      setErrors((prev) => ({ ...prev, message: 'Message should be longer than 10 characters' }));
      return;
    }

    send(
      'service_p4lfrx5',
      'template_ok240dj',
      toSend,
      'AGPFhv9zC94kWN0r5'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess(true);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='from_name'
          placeholder='From Name'
          value={toSend.from_name}
          onChange={handleChange}
        />
        {errors.reply_to && <div style={{ color: 'red' }}>{errors.reply_to}</div>}
        <input
          type='text'
          name='reply_to'
          placeholder='Your Email'
          value={toSend.reply_to}
          onChange={handleChange}
        />
        {errors.message && <div style={{ color: 'red' }}>{errors.message}</div>}
        <input
          type='text'
          name='message'
          placeholder='Your Message'
          value={toSend.message}
          onChange={handleChange}
        />
        <button type='submit'>S U B M I T</button>
        <br>
        </br>{success && <div style={{ color: 'green' }}>Email sent successfully!</div>}
      </form>
      
    </div>
    
  );
}
export default FormData;