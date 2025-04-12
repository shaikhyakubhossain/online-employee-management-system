import Button from "../Button/button.component"

type propsType = {
    updateSearchData: (data: string) => void
}

export default function FilterBar(props: propsType) {
    return (
        <div className="flex gap-4 mb-4">
        <div className="font-semibold text-2xl">Filter By : </div>
        <div className="flex flex-wrap gap-4">
          <div>
            <Button onClick={() => props.updateSearchData("")}>All</Button>
          </div>
          <div>
            <Button onClick={() => props.updateSearchData("approved")}>Approved</Button>
          </div>
          <div>
            <Button onClick={() => props.updateSearchData("rejected")}>Rejected</Button>
          </div>
          <div>
            <Button onClick={() => props.updateSearchData("pending")}>Pending</Button>
          </div>
        </div>
      </div>
    )
}