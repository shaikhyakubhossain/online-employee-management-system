import styles from "./auth.options.module.scss";
import Link from "next/link";
import AuthDropdown from "../AuthDropdown/auth-dropdown.component";

export default function AuthOptions() {
  return (
    <div className={`${styles.mainContainer} `}>
      { window.innerWidth > 1010 ?
        <div className={`${styles.desktop} flex text-2xl text-white`}>
          <div>
            <Link href={"/Auth?type=login&role=employee"}>
              <div>Login</div>
            </Link>
          </div>
          <div>
            <Link href={"/AboutUs"}>
              <div>About us</div>
            </Link>
          </div>
          <div>
            <Link href={"/Auth?type=signup&role=Admin"}>
              <div>Register</div>
            </Link>
          </div>
          <div>
            <Link href={"/Help"}>
              <div>Help</div>
            </Link>
          </div>
          <div>
            <Link href={"/ContactUs"}>
              <div>Contact us</div>
            </Link>
          </div>
        </div>
        :
        <AuthDropdown />
      }
    </div>
  );
}
