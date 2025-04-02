import styles from "./nav.module.scss";
import Link from "next/link";
import RightContainer from "./RightContainer/right-container.component";

export default function Nav() {
  return (
    <div
      className={`${styles.mainContainer} fixed top-0 left-0 right-0 flex justify-between items-center h-20 px-6 text-white text-2xl`}
    >
      <Link href={"/"}>
        <div>
          <img
            className="w-[182px] h-[83px] object-cover"
            src="https://res.cloudinary.com/dbdk7hykm/image/upload/v1743583935/54af1fc9068714e8a816c1c73476a052_mndckq.jpg"
            alt=""
          />
        </div>
      </Link>
      <RightContainer />
    </div>
  );
}
