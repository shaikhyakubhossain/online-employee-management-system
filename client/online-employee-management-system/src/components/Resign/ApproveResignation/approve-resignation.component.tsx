import Table from "@/components/Table/table.component";
import type { defaultData } from "@/constants/Types/response-data";

export default function ApproveResignation() {
  const data: defaultData[] = [];

  return (
    <div>
        <Table
          data={data}
          headers={[
            "Employee Name",
            "Regd.ID",
            "Email ID",
            "Designation",
            "Reason",
            "Status",
            "Action",
          ]}
        />
    </div>
  );
}
