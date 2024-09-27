import RadioBtn from "@/components/RadioBtn/radio-btn.component";
import SetDate from "../SetDate/set-date.component";

export default function FormContents() {
  return (
    <div className="">
      <div className="text-2xl font-semibold">Choose type of leave :</div>
      <div className="flex justify-evenly flex-wrap my-5">
        <RadioBtn label="Casual Leave" />
        <RadioBtn label="Pay Leave" />
        <RadioBtn label="Sick Leave" />
        <RadioBtn label="Maternity Leave" />
      </div>
      <div className="text-2xl font-semibold">Set range</div>
      <div className="flex my-5">
        <SetDate label="From" />
        <SetDate label="To" />
      </div>
      <label className="block mb-2 text-sm font-medium text-gray-900">
      Additional info : (Optional)
      </label>
      <textarea
        id="message"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..."
      ></textarea>
    </div>
  );
}
