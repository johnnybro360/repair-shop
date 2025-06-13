import React from "react";
import TicketSearch from "./TicketSearch";
import { getOpenTickets } from "@/lib/queries/getOpenTickets";
import { getTicketSearchResults } from "@/lib/queries/getTicketSearchResults";
import TicketTable from "./TicketTable";

export const metadata = {
  title: "Tickets",
};

async function Tickets({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { searchText } = await searchParams;
  if (!searchText) {
    const openTickets = await getOpenTickets();
    return (
      <>
        <TicketSearch />
        {openTickets.length ? (
          <TicketTable data={openTickets} />
        ) : (
          <p className="mt-4">No open tickets found</p>
        )}
      </>
    );
  }

  const results = await getTicketSearchResults(searchText);

  return (
    <>
      <TicketSearch />
      {results.length ? (
        <TicketTable data={results} />
      ) : (
        <p className="mt-4">No results found</p>
      )}
    </>
  );
}
export default Tickets;
