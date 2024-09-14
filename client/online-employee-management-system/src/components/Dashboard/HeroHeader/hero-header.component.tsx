import styles from './hero-header.module.scss'

export default function HeroHeader(): JSX.Element {
    return (
        <div className={`${styles.mainContainer} flex justify-between min-h-36 max-h-80 mb-7 px-8 rounded-2xl`}>
            <div className={`${styles.left} my-auto`}>
            <div className={`${styles.greeting} font-bold text-4xl`}>Hello User 👋</div>
            <div className='text-2xl'>You can manage your things from here</div>
            </div>
            <div className={`${styles.right} flex my-auto`}>
                <div></div>
                <div className='font-bold text-6xl'>Welcome</div>
                <div></div>
            </div>
        </div>
    )
}