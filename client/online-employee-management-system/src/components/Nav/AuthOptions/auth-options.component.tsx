import styles from './auth.options.module.scss';
import Link from "next/link";

export default function AuthOptions() {
    return (
        <div className={`${styles.mainContainer} flex text-2xl text-white`}>
            <div><Link href={'/Auth?type=login&role=employee'}><div>Login</div></Link></div>
            <div><Link href={'#'}><div>About us</div></Link></div>
            <div><Link href={'/Auth?type=signup&role=Admin'}><div>Register</div></Link></div>
            <div><Link href={'#'}><div>Help</div></Link></div>
        </div>
    )
}