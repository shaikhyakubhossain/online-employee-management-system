import { useState } from "react";
import Table from "@/components/Table/table.component";
import DetailModal from "@/components/DetailModal/detail-modal.component";
import type { defaultData, employeeData } from "@/constants/Types/response-data";

type propsType = {
  data: defaultData[] | null;
  handleAction: (id: string, action: string) => void;
};

export default function ApproveResignation(props: propsType) {

  const [modalDetailToShow, setModalDetailToShow] =
        useState<employeeData | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div>
      {showModal && (
                      <DetailModal
                        data={modalDetailToShow}
                        additionalInfo={props.data && props.data[0].reason}
                        hide={() => setShowModal(false)}
                      />
                    )}
      <Table
      handleRowDetailToShowInModal={(row) => {
        setModalDetailToShow(row);
        setShowModal(true);
      }}
        data={props.data}
        headers={[
          "Employee Name",
          "Regd.ID",
          "Email ID",
          "Designation",
          "Status",
          "Action",
        ]}
        showAction={true}
        handleAction={props.handleAction}
      />
    </div>
  );
}
