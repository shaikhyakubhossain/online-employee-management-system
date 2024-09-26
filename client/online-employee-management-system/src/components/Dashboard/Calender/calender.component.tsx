export default function Calender(): JSX.Element {
    return (
        <div className="w-1/2 p-7 rounded-lg" style={{background: "#FFEBEB"}}>
            <div className="flex justify-between text-red-500">
                <div></div>
                <div className="font-bold text-2xl mx-6">Sep 2024</div>
                <div></div>
            </div>
            <div className="flex justify-between font-bold text-blue-900">
                <div>MON</div>
                <div>TUE</div>
                <div>WED</div>
                <div>THU</div>
                <div>FRI</div>
                <div>SAT</div>
                <div>SUN</div>
            </div>
        </div>
    )
}