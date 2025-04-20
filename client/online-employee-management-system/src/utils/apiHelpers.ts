import { getUrl } from "@/constants/url";

export const downloadCSV = async (token: string, collectionName: string) => {
    try{
      const response = await fetch(`${getUrl()}/get-collection-csv?collection=${collectionName}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
          role: "both",
        },
      });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${collectionName}.csv`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    }
    catch(e){
      console.error(e);
    }
  }