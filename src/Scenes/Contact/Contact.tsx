import { pages } from '@/Shared/types'
import axios from 'axios'
import {useState} from 'react'
import { motion } from "framer-motion"

type Props = {
  setSelectedPage: (value: pages)=> void
}

const Contact = ({setSelectedPage}: Props) => {
    const [email, setEmail] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    const inputstyle = `mb-1  w-full rounded-lg bg-primary-300
    px-5 py-2  outline-none`

    const handleSubmit = async(e:any)=>{
        e.preventDefault()
        if(!email || !name || !message) return window.alert('All fields are required.')
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!email.match(mailformat)){
          return window.alert('Invalid Email Address')
        }
        setLoading(true)
        try{
          const res = await axios.post('https://getform.io/f/ef97b302-e8a2-423f-af2d-d0e9c50319e4',{
          email, name, message
          })
          if(res?.status === 200){
            window.alert('Message sent successfully')
            setEmail('')
            setName('')
            setMessage('')
          }
          // console.log('res',res)
        }
        catch(err){
          setLoading(false)
          return window.alert("Unable to send message, Please try later.")
        }
        setLoading(false)
      }


  return (
    <motion.div
    onViewportEnter={()=>setSelectedPage(pages.Contact)}
    id='contact' className='h-[90%] w-full px-8 pt-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
        <div className='flex flex-col items-center justify-center pt-8'>
            <p className='font-bold text-2xl underline underline-offset-4 text-white'>Contact Me!</p>
            <div className='pt-8 w-full flex  justify-center'>
                <form className='flex flex-col  gap-7 w-80'  onSubmit={handleSubmit}>
                    <motion.input
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true,amount:0.5}}
                    transition={{duration:1}}
                    variants={{
                      hidden: {opacity:0, y:-50},
                      visible: {opacity:1,y:0}
                    }}
                    value={name}
                            onChange={(e)=> setName(e.target.value)}
                            className={`${inputstyle}`} type="text" placeholder='Your Name' />
                    <motion.input
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true,amount:0.5}}
                    transition={{duration:1}}
                    variants={{
                      hidden: {opacity:0, y:-50},
                      visible: {opacity:1,y:0}
                    }}
                    value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        className={`${inputstyle}`} type="text" placeholder='Your E-Mail' />
                    <motion.textarea 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true,amount:0.5}}
                    transition={{duration:1}}
                    variants={{
                      hidden: {opacity:0, y:-50},
                      visible: {opacity:1,y:0}
                    }}
                    value={message}
                     onChange={(e)=> setMessage(e.target.value)}
                        className={`${inputstyle} h-32` } name="" placeholder='Your Message' ></motion.textarea>
                    <motion.button
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true,amount:0.5}}
                    transition={{duration:1}}
                    variants={{
                      hidden: {opacity:0, y:-50},
                      visible: {opacity:1,y:0}
                    }}
                    disabled={loading} className='mx-auto bg-purple-800 p-2 w-1/2 rounded-xl hover:bg-purple-950 font-bold text-white transition-all duration-200' type='submit'>{` ${loading ? "Loading" : "Send"}`}</motion.button>
                </form>
            </div>
        </div>
    </motion.div>
  )
}

export default Contact