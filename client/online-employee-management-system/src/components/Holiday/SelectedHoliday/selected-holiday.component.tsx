type propsType = {
    selectedHoliday: string | null;
}

export default function SelectedHoliday(props: propsType) {
    const { selectedHoliday } = props;
    return (
        <div className="flex justify-center items-center">
            {selectedHoliday && (
            <div className="mb-4 p-4 bg-blue-100 text-blue-800 rounded-lg">
              <p>
                <strong>Selected Holiday:</strong> {selectedHoliday}
              </p>
            </div>
          )}
        </div>
    )
}