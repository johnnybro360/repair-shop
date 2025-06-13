 import Form from "next/form";
 import { Input } from "@/components/ui/input";
 import SearchButton from "@/components/ui/SearchButton";

 export default function CustomerSearch(){
    return (
        <Form action="/customers"
        className="flex gap-2 items-center"
        >
            <Input
            type="text"
            name="searchText"
            placeholder="Search Customers"
            className="w-full"
            autoFocus
            />
            <SearchButton />
        </Form>
    )
}