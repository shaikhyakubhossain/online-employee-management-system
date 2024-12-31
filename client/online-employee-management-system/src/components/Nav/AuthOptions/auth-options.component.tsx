import styles from "./auth.options.module.scss";
import Link from "next/link";
import Button from "@/components/Button/button.component";
import AuthDropdown from "../AuthDropdown/auth-dropdown.component";

export default function AuthOptions() {
  return (
    <div className={`${styles.mainContainer} `}>
      { window.innerWidth > 800 ?
        <div className={`${styles.desktop} flex text-xl text-white`}>
          <div>
            <Link href={"/Auth?type=login&role=employee"}>
              <Button>Login</Button>
            </Link>
          </div>
          <div>
            <Link href={"/AboutUs"}>
              <Button>About us</Button>
            </Link>
          </div>
          <div>
            <Link href={"/Auth?type=signup&role=Admin"}>
              <Button>Register</Button>
            </Link>
          </div>
          <div>
            <Link href={"/Help"}>
              <Button>Help</Button>
            </Link>
          </div>
          <div>
            <Link href={"/ContactUs"}>
              <Button>Contact us</Button>
            </Link>
          </div>
        </div>
        :
        <AuthDropdown />
      }
    </div>
  );
}
