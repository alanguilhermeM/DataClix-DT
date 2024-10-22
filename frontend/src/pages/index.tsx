import CurrentWeather from '@/components/CurrentWeather';
import React from 'react'

const Home: React.FC = () => {
  return (
    <div className='bg-black'>
      <CurrentWeather />
    </div>
  )
}

export default Home;