import { ClipboardDocumentIcon } from "@heroicons/react/24/outline"


const BillTrig = () => {
  return (
    <div className="flex items-center">
        <ClipboardDocumentIcon className="h-7 w-7 pr-1" />
        <span className="text-lg">Bill to</span>
        <a className="text-[--beacon-orange] font-semibold no-underline ml-4" href="">
            Edit
        </a>
    </div>
  )
}

export default BillTrig