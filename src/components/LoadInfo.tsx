import { Input } from "./ui/input"
import { Button } from "./ui/button"
import files_img from "../assets/undraw_my_files_swob.svg"
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'

const LoadInfo = () => {
  return (
    <section className="p-3 pt-[82px]">
        <Input
            type="text"
            placeholder="Search"
            className="text-slate-400"
        />
        <h2 className="my-4 text-xl">
            Load PRO 
            <a className="text-[--beacon-orange] font-semibold leading-5 underline decoration-solid decoration-[#fe7a4a] decoration-1 underline-offset-4 ml-2" href="">
                #27658930
            </a>
        </h2>
        <div className="flex my-4 font-semibold">
            <div className="flex flex-1 items-center">
                <p className="pr-1">Labels</p>
                <ExclamationCircleIcon className="text-[#fe7a4a] h-4 w-4" />
            </div>
            <div className="flex flex-2 justify-between gap-1">
                <Button variant={"default"} size={"sm"}>Carrier</Button>
                <Button variant={"default"} size={"sm"}>Carrier Info</Button>
            </div>
        </div>

        <div className="flex my-4 font-semibold">
            <div className="flex w-full justify-between">
                <p className="pr-1">Status</p>
                <Button variant={"destructive"} size={"smBox"} className="font-semibold">
                    <ExclamationCircleIcon className="h-5 w-5 pr-1" />
                    High
                </Button>
            </div>
        </div>

        <div className="flex mb-4">
            <div>
                <div className="w-8 h-8 bg-white border-orange-400 border-solid border-2 flex justify-center items-center rounded-full">
                    <h1 className="bg-gradient-to-b from-red-600 to-orange-400 bg-clip-text text-transparent text-[1.4rem]">B</h1>
                </div>
            </div>
            <div className="flex justify-center items-center bg-gradient-to-r from-[#3f53d8] to-[#12259e] text-gray-300 px-4 py-3 rounded-lg ml-2">
                <div>
                    <div>
                        <h3 className="text-sm">Good Morning , Mary!</h3>
                        <p className="text-xs">Please confirm the following address:</p>
                        <a href="" className="font-semibold leading-[3rem] underline decoration-solid decoration-gray-300 decoration-1 underline-offset-4 text-sm ">Carrier Info</a>
                    </div>
                </div>
                <div>
                    <img src={files_img} alt="files_img" className="h-16" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default LoadInfo