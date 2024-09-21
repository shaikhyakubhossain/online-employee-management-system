import styles from './hero-header.module.scss';
import { sveForHeroHeader } from '@/constants/Svg/svg';
import Greeting from '../Greeting/greeting.component';

export default function HeroHeader(): JSX.Element {
    return (
        <div className={`${styles.mainContainer} flex justify-between min-h-36 max-h-80 mb-7 pl-8 pr-24 rounded-2xl`}>
            <div className={`${styles.left} my-auto`}>
                <Greeting />
            <div className='text-2xl'>You can manage your things from here</div>
            </div>
            <div className={`${styles.right} flex my-auto relative`}>
                <div className={`${styles.svgs} -left-24 -top-14`}><img src={sveForHeroHeader[0].base64} alt="" /></div>
                <div className='font-bold text-6xl my-auto'>Welcome</div>
                <div className={`${styles.svgs} -right-16 -top-11`}><img src={sveForHeroHeader[1].base64} alt="" /></div>
            </div>
        </div>
    )
}