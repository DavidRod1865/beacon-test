import { StarIcon } from '@heroicons/react/24/outline'

const CustomerTrig = () => {
  return (
    <div>
        <div className="flex items-center">
            <StarIcon className="h-7 w-7 pr-1" />
            <span className="text-lg">Customer</span>
            <a className="text-[--beacon-orange] font-semibold no-underline ml-4" href="">
              Edit
            </a>
        </div>
    </div>
  )
}

export default CustomerTrig