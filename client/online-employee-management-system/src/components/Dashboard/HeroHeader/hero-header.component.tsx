import styles from './hero-header.module.scss';
import { svgForHeroHeader } from '@/constants/Svg/svg';
import Greeting from '../Greeting/greeting.component';
// max-[552px]:text-[1vw]
export default function HeroHeader(): JSX.Element {
    return (
        <div className={`${styles.mainContainer} flex justify-between min-h-36 max-h-80 mb-7 pl-8 pr-24 rounded-2xl`}>
            <div className={`${styles.left} my-auto`}>
                <Greeting />
            </div>
            <div className={`${styles.right} flex my-auto relative`}>
                <div className={`${styles.svgs} -left-24 -top-14`}><img src={svgForHeroHeader[0].base64} alt="" /></div>
                <div className='font-bold text-6xl my-auto'>Welcome</div>
                <div className={`${styles.svgs} -right-16 -top-11`}><img src={svgForHeroHeader[1].base64} alt="" /></div>
            </div>
        </div>
    )
}