import CurrentWeather from '@/components/CurrentWeather';
import React from 'react'
import '@/styles/globals.css';

const Home: React.FC = () => {
  return (
    <div 
      className='max-w-[800px] min-w-[800px] w-full bg-[#232931] text-[#fff] rounded-[25px] shadow-[0_5px_15px_rgba(0,0,0,0.35)]'
      >
      <CurrentWeather />
    </div>
  )
}

export default Home;