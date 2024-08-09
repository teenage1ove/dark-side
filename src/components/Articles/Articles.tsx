"use client"

import { IResponseArticles } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'
import { BiLoaderAlt } from 'react-icons/bi'


interface Props {}

const BASE_URL = 'https://api.jsonbin.io/v3/b/66b5d187e41b4d34e41def2b'
const headers = new Headers()
headers.append('X-Master-Key', '$2a$10$ObxR0lU04NQD2QS8xGRxRualGHB3tBYxKvv2HjysNigGUCAC/BoWC')
const  getArticles = async() => {
  const data = await fetch(BASE_URL, {
    method: 'GET',
    headers
  }).then(res => res.json())
  return data
}

const Articles: NextPage<Props> = ({}) => {
  const {data, isLoading, isError} = useQuery<IResponseArticles>({
    queryKey: ['articles'],
    queryFn: getArticles
  })

  return (
  <div className='pt-48 flex flex-col'>
    <h1 id='articles' className='text-center font-semibold uppercase text-4xl max-sm:text-2xl'>Статьи для заработка</h1>
    <span className='text-center font-semibold text-xl mt-5 max-sm:text-base'>Здесь Вы найдете лучшие статьи для заработка и абуза, удачи друг</span>
    <span className='text-center text-lg mt-1 max-sm:text-sm text-gray-400 opacity-75'>В честь открытия выложили 2 приватных схемы!</span>

    <div className='mt-10'>
        {isError && <div className='flex justify-center items-center mt-10 text-red-600'>Произошла ошибка</div>}
        {isLoading ? <div className='flex justify-center items-center mt-10 animate-spin'><BiLoaderAlt /></div> : (
          <div className='flex gap-x-5 gap-y-10 items-center justify-center flex-wrap'>
            {data?.record?.articles.map(item => (
            <a href={item.link} target='_blank'>
              <div key={item.id} className='max-w-72 min-h-96 flex flex-col items-center border-stone-600 border-2 rounded-lg px-2 py-3 bg-gray-400 bg-opacity-25 transition-all hover:-rotate-1'>
                <h3 className='text-center font-bold text-xl mb-2'>{item.title}</h3>
                <div className='relative z-2 w-max mb-2'>
                  <span className='absolute left-2 top-2 rounded-full bg-white text-black py-1 px-2 bg-opacity-75 font-bold text-sm'>{item.level}</span>
                  <img src={item.image} className='w-64 rounded-lg z-1 max-h-40 object-cover'/>
                </div>
                <div className='text-center max-sm:text-base'>{item.description}</div>
              </div>
            </a>
          ))}
          </div>
        )}
    </div>
  </div>)
}

export default Articles