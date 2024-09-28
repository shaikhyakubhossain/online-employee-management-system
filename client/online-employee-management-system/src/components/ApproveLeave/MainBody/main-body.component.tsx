import styles from "./main-body.module.scss";
import Button from "@/components/Button/button.component";
import Table from "../Table/table.component";

export default function MainBody() {
  return (
    <div className={`${styles.mainContainer}`}>
      <div className="flex gap-4">
        <div className="font-semibold text-2xl">Filter By : </div>
        <div>
          <Button>Approved</Button>
        </div>
        <div>
          <Button>Rejected</Button>
        </div>
      </div>
      <div className={`${styles.tableContainer} my-5`}>
        <Table />
      </div>
    </div>
  );
}
