import Table from "@/components/Table/table.component";
import type { defaultData } from "@/constants/Types/response-data";

type propsType = {
  data: defaultData[] | null;
  handleAction: (id: string, action: string) => void;
};

export default function ApproveResignation(props: propsType) {
  return (
    <div>
      <Table
        data={props.data}
        headers={[
          "Employee Name",
          "Regd.ID",
          "Email ID",
          "Designation",
          "Status",
        ]}
        showAction={true}
        handleAction={props.handleAction}
      />
    </div>
  );
}
