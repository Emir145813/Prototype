"use client"
import SegHeader from './SegHeader'
import Container from './container'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import ContactUSIco from '../../public/SVG/ContactUSIco'
import { useForm, SubmitHandler } from "react-hook-form"
import { Inputs } from './interfaces'

function ContactUS() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <div>
      <SegHeader title='Call US'/>
      <div className='bg-base-100 py-20'>
        <Container>
          <div className='bg-black py-20 rounded-3xl h-full grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-end'>
            <div className='flex justify-center'>
              <ContactUSIco/>
            </div>
            <div className='flex justify-center m-5'>
              <form className='w-3/5' onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <Input {...register("email",{ required: true })} type="email" placeholder="Email" />
                  {errors.email && <p className='text-[12px] text-red-400 pt-2'>This field is required</p>}
                </div>
                <div>
                  <Input {...register("subject",{ required: true })} type="text" placeholder="Subject" className='mt-4'/>
                  {errors.subject && <p className='text-[10px] text-red-400 pt-2'>This field is required</p>}
                </div>
                <div>
                  <Textarea {...register("message",{ required: true })} placeholder='Your Message' className='mt-4 p-3 rounded-lg bg-gray-200 h-24 resize-none outline-none'></Textarea>
                  {errors.message && <p className='text-[10px] text-red-400 pt-2'>This field is required</p>}
                </div>
                <Button type="submit" className='bg-green-500 text-white rounded-lg mt-4 py-2 hover:bg-green-600 transition-colors'>Send Message</Button>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default ContactUS