import React, { useState } from 'react'


const CallToAction = () => {

  const [text,setText] = useState<string>("");

  /*const config = () =>{
        
        sgMail.setApiKey("");
        const msg = {
        to: 'destinatario@example.com', 
        from: 'remitente@example.com', 
        subject: 'Asunto del correo electrónico',
        html: '<p>Contenido del correo electrónico en formato HTML</p>',
        };

        sgMail.send(msg)
        .then(() => console.log('Correo electrónico enviado correctamente'))
        .catch((error:any) => console.error(error));
  }*/
  const sendEmailHandle = (event: React.MouseEvent<HTMLButtonElement>) =>{
    setText("");
  }

  const saveTextHandle = (event: React.ChangeEvent<HTMLTextAreaElement>) =>{
    const textareaText =event.target.value;
    setText(textareaText);
  }



  return (
    <div className='row h-75 bg-dark'>
        <h2 className='text-white'>CallToAction</h2>
       
        <div className='d-flex gap-5 mx-5 my-5'>
            <div className='w-75'>
                <h2 className='text-white'>Write a message</h2>
                <textarea rows={6} cols={50} className='w-75 rounded px-2 h-75' placeholder='Write here' onChange={saveTextHandle} value={text}></textarea>
            </div>
            <button className='py-3 align-self-end btn btn-primary my-3' onClick={sendEmailHandle}>Send to my email</button>
        </div>
    </div>
  )
}

export default CallToAction