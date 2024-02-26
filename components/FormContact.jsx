import React from 'react'
import { Send } from "lucide-react"

export const FormContact = () => {

    const onSubmit = (e) => {
        e.preventDefault()
        window.alert('The form is disabled in dev mod')
    }

  return (
    <div className='flex items-center justify-center'>
        <form onSubmit={onSubmit} className='flex flex-col gap-5 w-3/4 md:w-1/2'>
            <input 
                type="email" 
                className='py-3 px-4 outline-none text-high-contrast rounded-xl bg-ui-bg placeholder:text-low-contrast' 
                placeholder='votre.email@exemple.fr'
                name='email'
                id='email'
            />
             <input 
                type="text" 
                className='py-3 px-4 outline-none text-high-contrast rounded-xl bg-ui-bg placeholder:text-low-contrast' 
                placeholder='Objet'
                name='objet'
                id='objet'
            />
            <textarea 
                className='py-3 px-4 resize-none rounded-xl outline-none bg-ui-bg placeholder:text-low-contrast'
                name="message" 
                id="message" 
                placeholder='Votre message'
                rows="9"
            >
            </textarea>
            <div className=''>
                <button 
                    type='submit'
                    className='w-full font-medium bg-button text-high-contrast px-7 py-3 flex justify-center items-center gap-2 rounded-full hover:scale-110 hover:bg-hover transition-all'
                >
                    <Send color='#16433C' />
                    Envoyer
                </button>
            </div>
        </form>
    </div>
  )
}
