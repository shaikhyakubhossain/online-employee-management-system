import { downloadCSV } from "@/utils/apiHelpers";
import Button from "../Button/button.component";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

type propsType = {
  collectionName: string;
};

export default function CsvDownload(props: propsType) {
  const token = useSelector((state: RootState) => state.authDetail.token);

  return (
    <div className="my-4">
      {token && (
        <Button onClick={() => downloadCSV(token, props.collectionName)}>
          Download CSV
        </Button>
      )}
    </div>
  );
}
