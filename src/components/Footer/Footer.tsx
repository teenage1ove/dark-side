import { NextPage } from 'next'
import { FaTelegram } from 'react-icons/fa'

interface Props {}

const Footer: NextPage<Props> = ({}) => {
  return (<div className='mt-64 bg-gray-200 rounded-t-xl bg-opacity-20 py-6 flex items-center justify-between px-10 gap-x-6'>
    <div className='text-center text-white font-medium text-lg max-sm:text-base'>DarkSide © 2024. Все права защищены.</div>
    <div className='text-center font-semibold '>
        <a href='https://t.me/darks1de_platform' target='_blank'><FaTelegram className='text-3xl'/></a>
    </div>
  </div>)
}

export default Footer