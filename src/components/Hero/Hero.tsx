import { NextPage } from 'next'

interface Props {}

const Hero: NextPage<Props> = ({}) => {
  return (
    <div className='flex justify-center items-center mt-64 flex-col pb-72 max-sm:mt-48 max-sm:pb-48'>
        <h2 className='text-center font-semibold uppercase text-5xl animate-bounce max-sm:text-3xl'>О нашей платформе</h2>
        <span className='text-center font-semibold text-xl mt-10 max-sm:text-base'>Мы занимаемся поиском различных схем для заработка в интернете. <br /> Мы помогли уже более 100 людям начать зарабатывать на темках. Смогли они, значит сможешь и ты) <br /> Неважно кто вы, кем и где работаете — грузчиком на складе или кассиром в пятерочке, а может только учитесь и ещё не начали работать вовсе, дополнительный заработок актуален всегда. <br />

        И схемы актуальны всегда! </span>
    </div>
  )
}

export default Hero