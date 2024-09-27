import RadioBtn from "@/components/RadioBtn/radio-btn.component";

export default function FormContents() {
    return (
        <div className="">
            <div className="text-2xl font-semibold">Choose type of leave :</div>
            <div className="flex justify-evenly my-5">
            <RadioBtn label="Casual Leave" />
            <RadioBtn label="Pay Leave" />
            <RadioBtn label="Sick Leave" />
            <RadioBtn label="Maternity Leave" />
            </div>
        </div>
    );
}