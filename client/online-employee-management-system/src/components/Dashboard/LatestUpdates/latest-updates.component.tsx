import styles from "./latest-updates.module.scss"

export default function LatestUpdates() {
    return (
        <div className=" w-1/2 p-7 mr-7 rounded-lg h-60" style={{background: "#F3F3F3"}}>
            <div className="flex justify-between font-semibold">
                <div className="text-xl">Latest Updates</div>
                <div></div>
            </div>
            <div className={`${styles.subContainer} text-sm font-semibold h-40 overflow-y-auto`}>
                <div className="my-5 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
                <div className="my-5 border-t-2 border-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
                <div className="my-5 border-t-2 border-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
            </div>
        </div>
    )
}