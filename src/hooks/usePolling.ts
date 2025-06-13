import { useEffect } from "react";

import { useRouter } from "next/navigation";

export function usePolling(ms: number = 60000, searchParam: string | null) {
  const router = useRouter();

  useEffect(() => {
    const invervalId = setInterval(() => {
      console.log("interval running");

      if (!searchParam) {
        console.log("refreshing data");
        router.refresh();
      }
    }, ms);

    return () => clearInterval(invervalId);
  }, [searchParam, ms]); // eslint-disable-line react-hooks/exhaustive-deps
}
