import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion"
import SectionContent from "./SectionContent/SectionContent"
import BillTrig from "./SectionTrigger/BillTrig"
import CustomerTrig from "./SectionTrigger/CustomerTrig"
import PickTrig from "./SectionTrigger/PickTrig"
import ConsigneeTrig from "./SectionTrigger/ConsigneeTrig"
import Carrier from "./SectionContent/CarrierContent"
import CarrierTrig from "./SectionTrigger/CarrierTrig"
import { Button } from "../ui/button"

const TMS = () => {

  return (
       <div>
         <Accordion type="single" collapsible>

          <AccordionItem value="customer">
            <AccordionTrigger>
              <CustomerTrig />
            </AccordionTrigger>
            <AccordionContent>
              <SectionContent />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="Bill">
            <AccordionTrigger>
              <BillTrig />
            </AccordionTrigger>
            <AccordionContent>
              <SectionContent />
            </AccordionContent>
          </AccordionItem>

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

          <AccordionItem value="Carrier">
            <AccordionTrigger>
              <CarrierTrig />
            </AccordionTrigger>
            <AccordionContent>
             <Carrier />
            </AccordionContent>
          </AccordionItem>

         </Accordion>

         <Button variant={"orange"} size={"lg"} className="mb-5">Confirm</Button>
       </div>
  )
}

export default TMS