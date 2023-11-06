import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion"
import SectionContent from "./SectionContent/SectionContent"
import PickTrig from "./SectionTrigger/PickTrig"
import ConsigneeTrig from "./SectionTrigger/ConsigneeTrig"
import { Button } from "../ui/button"

const TMS = () => {

  return (
       <div>
         <Accordion type="single" collapsible>

          <AccordionItem value="Pick">
            <AccordionTrigger>
              <PickTrig />
            </AccordionTrigger>
            <AccordionContent>
              <SectionContent />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="Consignee">
            <AccordionTrigger>
              <ConsigneeTrig />
            </AccordionTrigger>
            <AccordionContent>
              <SectionContent />
            </AccordionContent>
          </AccordionItem>

         </Accordion>

         <Button variant={"orange"} size={"lg"} className="mb-5">Confirm Pick Up Schedule</Button>
       </div>
  )
}

export default TMS