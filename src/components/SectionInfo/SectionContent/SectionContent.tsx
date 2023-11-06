import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Customer = () => {
  return (
    <div>
        <Label>Name</Label>
        <Input placeholder="e.g. Harvey Rodriguez & Co"/>
        <Label>Address</Label>
        <Input placeholder="e.g. 37 Jade Mountain, Apt. 2"/>
        
        <div className="flex justify-between">
            <div className="flex flex-col flex-1 mr-1">
                <Label>City</Label>
                <Input placeholder="City"/>
                <Label>Zip</Label>
                <Input placeholder="e.g. 89381-6757"/>
            </div>
            <div className="flex flex-col flex-1 ml-1">
                <Label>State</Label>
                <Input placeholder="State"/>
                <Label>Code</Label>
                <Input placeholder="Code"/>
            </div>
        </div>

        <Label>Contact</Label>
        <Input placeholder="e.g. Harvey Rodriguez"/>
        <Label>Phone</Label>
        <Input placeholder="Phone"/>
        <Label>Email</Label>
        <Input placeholder="example@gmail.com"/>
        <Label>Ref number</Label>
        <Input placeholder="Ref number"/>
    </div>
  );
};

export default Customer;
