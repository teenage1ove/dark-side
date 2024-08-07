import { NextPage } from 'next'

interface Props {}

const Articles: NextPage<Props> = ({}) => {
  return (
  <div className='pt-48 flex flex-col'>
    <h1 id='articles' className='text-center font-semibold uppercase text-4xl max-sm:text-2xl'>Статьи для заработка</h1>
    <span className='text-center font-semibold text-xl mt-10 max-sm:text-base'>Здесь Вы найдете лучшие статьи для заработка и абуза, удачи друг</span>

    <div>
        
    </div>
  </div>)
}

export default Articles