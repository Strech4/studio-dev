import React from 'react'
import { Send } from "lucide-react"
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormErrorsParagraph } from './FormErrorsParagraph';


const formSchema = z.object({
    email: z.string().email({
        message: "Adresse email invalide."
    }),
    emailObject: z.string().min(2).max(30, {
        message: "L'objet de votre mail doit contenir 2 à 30 caractères."
    }),
    message: z.string().min(30).max(1500, {
        message: "Le message doit contenir 30 a 1500 caractères"
    })
})

export const FormContact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema)
    })

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className='flex items-center justify-center'>
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col gap-3 w-3/4 md:w-1/2'
            >
                <input
                    type="email"
                    className='py-3 px-4 outline-none text-high-contrast rounded-xl bg-ui-bg placeholder:text-low-contrast'
                    placeholder='votre.email@exemple.fr'
                    name='email'
                    id='email'
                    {...register("email")}
                />
                {errors.email && <FormErrorsParagraph value={`Adresse email invalide.`} />}

                <input
                    type="text"
                    className='py-3 px-4 outline-none text-high-contrast rounded-xl bg-ui-bg placeholder:text-low-contrast'
                    placeholder='Objet'
                    name='objet'
                    id='objet'
                    {...register("emailObject")}
                />
                {errors.emailObject && <FormErrorsParagraph value={`L'objet de votre mail doit contenir 2 à 30 caractères.`} />}

                <textarea
                    className='py-3 px-4 resize-none rounded-xl outline-none bg-ui-bg placeholder:text-low-contrast'
                    name="message"
                    id="message"
                    placeholder='Votre message'
                    rows="9"
                    {...register('message')}
                >
                </textarea>
                {errors.message && <FormErrorsParagraph value={`Le message doit contenir 30 a 1500 caractères`} />}

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

/* 
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
    */