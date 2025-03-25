import styles from './user-options.module.scss';
import Link from "next/link";
import { navRight } from '@/constants/Basic/data';

type propsType = {
    shortName: string | null,
    firstName: string | undefined
}

export default function UserOptions(props: propsType) {
    return (
        <div className={`${styles.mainContainer} flex text-2xl text-white my-auto`}>
            <div className='flex my-auto'>
            {
                navRight.map((item, index): JSX.Element => {
                    return (
                        <Link key={index} href={item.link}><div className='mx-3'><img className="w-5" src={item.base64Icon} alt="" /></div></Link>
                    )
                })
            }
            </div>
            <Link href={'/Profile'}><div className='flex justify-center items-center my-auto mx-6'>
                <div className='flex justify-center items-center rounded-full w-10 h-10 bg-white overflow-hidden text-black text-center mr-4'>{props.shortName}</div>
                <div className='flex justify-center items-center max-[480px]:hidden'>{props.firstName}</div>
            </div></Link>
        </div>
    )
}