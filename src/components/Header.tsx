import { XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
  return (
    <div className="bg-black h-[60px] flex justify-between items-center p-3 fixed z-10 w-full">
        <h1 className="bg-gradient-to-b from-red-600 to-orange-400 bg-clip-text text-transparent text-[1.4rem]">Beacon</h1>
        <XMarkIcon className='text-white text-[1.4rem] h-6 w-6' />
    </div>
  )
}

export default Header