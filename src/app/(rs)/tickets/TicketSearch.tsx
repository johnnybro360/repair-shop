import Form from "next/form";
import { Input } from "@/components/ui/input";
import SearchButton from "@/components/ui/SearchButton";

export default function TicketSearch(){
   return (
       <Form action="/tickets"
       className="flex gap-2 items-center"
       >
           <Input
           type="text"
           name="searchText"
           placeholder="Search Tickets"
           className="w-full"
           autoFocus
           />
           <SearchButton />
       </Form>
   )
}