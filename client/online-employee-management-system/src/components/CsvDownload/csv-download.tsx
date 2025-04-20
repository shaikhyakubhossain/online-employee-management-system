import { downloadCSV } from "@/utils/apiHelpers";
import Button from "../Button/button.component";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function CsvDownload() {
  const token = useSelector((state: RootState) => state.authDetail.token);

  return (
    <div>
      {token && (
        <Button onClick={() => downloadCSV(token, "attendance")}>
          Download CSV
        </Button>
      )}
    </div>
  );
}
