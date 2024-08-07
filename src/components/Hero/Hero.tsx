import { NextPage } from 'next'

interface Props {}

const Hero: NextPage<Props> = ({}) => {
  return (
    <div className='flex justify-center items-center mt-64 flex-col pb-48 max-sm:mt-48'>
        <h2 className='text-center font-semibold uppercase text-5xl animate-bounce max-sm:text-3xl'>Немного о нашей платформе</h2>
        <span className='text-center font-semibold text-2xl mt-10 max-sm:text-base'>Мы занимаемся поиском различных схем для казино и тп. <br /> Мы помогли уже более 1000 людей начать зарабатывать с полного нуля. Смогли они, значит сможешь и ты)</span>
    </div>
  )
}

export default Hero