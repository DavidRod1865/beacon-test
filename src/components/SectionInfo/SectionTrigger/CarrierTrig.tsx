import { RocketLaunchIcon } from '@heroicons/react/24/outline'

const CarrierTrig = () => {
  return (
    <div>
        <div className="flex items-center">
            <RocketLaunchIcon className="h-7 w-7 pr-1" />
            <span className="text-lg">Carrier</span>
            <a className="text-[--beacon-orange] font-semibold no-underline ml-4" href="">
              Edit
            </a>
        </div>
    </div>
  )
}

export default CarrierTrig