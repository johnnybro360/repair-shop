import React from "react";
import CustomerSearch from "./CustomerSearch";
import { getCustomerSearchResults } from "@/lib/queries/getCustomerSearchResults";
import * as Sentry from "@sentry/nextjs";
import CustomerTable from "./CustomerTable";

export const metadata = {
  title: "Customer Search",
};

async function Customers({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { searchText } = await searchParams;

  if (!searchText) {
    return <CustomerSearch />;
  }

  const span = Sentry.startInactiveSpan({
    name: "getCustomerSearchResults-2",
  });

  const results = await getCustomerSearchResults(searchText);

  span.end();

  return (
    <>
      <CustomerSearch />
      {results.length > 0 ? (
        <CustomerTable data={results} />
      ) : (
        <p className="mt-4">No results found</p>
      )}
    </>
  );
}

export default Customers;
