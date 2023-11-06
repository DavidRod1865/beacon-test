import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TruckIcon, CalendarIcon, CodeBracketIcon } from "@heroicons/react/24/outline"
import TMS from "./SectionInfo/TMS"
import Schedule from "./SectionInfo/Schedule"
import Labels from "./SectionInfo/Labels"

const Sections = () => {
    return (
        <Tabs defaultValue="TMS Info" className="w-full">
            <TabsList>
                <TabsTrigger value="TMS Info" className="text-md">
                    <TruckIcon className="h-6 w-6 pr-1" />
                    TMS info
                </TabsTrigger>
                <TabsTrigger value="Scheduling Info" className="text-md">
                    <CalendarIcon className="h-6 w-6 pr-1" />
                    Scheduling Info
                </TabsTrigger>
                <TabsTrigger value="Labels" className="text-md">
                    <CodeBracketIcon className="h-6 w-6 pr-1"/>
                    Labels
                </TabsTrigger>
            </TabsList>
            <TabsContent value="TMS Info">
                <TMS />
            </TabsContent>
            <TabsContent value="Scheduling Info">
                <Schedule />
            </TabsContent>
            <TabsContent value="Labels">
                <Labels />
            </TabsContent>
        </Tabs>
    )
}

export default Sections