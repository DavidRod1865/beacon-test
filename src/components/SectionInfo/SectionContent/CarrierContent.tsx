import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Carrier = () => {
  return (
    <div>
      <Label>Carrier Name</Label>
      <Input placeholder="e.g. ABC Trucking Co" />
   
      <Label>Ref number</Label>
      <Input placeholder="Ref number" />
    </div>
  );
};

export default Carrier;