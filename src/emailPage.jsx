
import emailjs from 'emailjs-com'

emailjs.init('YNFtuSWhCaneh9sku')

function emailSubscriptions(e,  sub) {
    e.preventDefault();


    emailjs.send('service_03vr4j9','template_iaodzuj',
    {
        subscriber: sub 
    } )
    
	.then((response) => {
        console.log('SUCCESS!', response.status, response.text);}, 
        (err) => {
            console.log('FAILED...', err);
        }
    )
    
  }
   
 export default emailSubscriptions;

