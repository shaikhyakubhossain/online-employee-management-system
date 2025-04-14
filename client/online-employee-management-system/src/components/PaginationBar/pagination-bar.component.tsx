import Button from "@/components/Button/button.component";
import { btnList2 } from "@/constants/Basic/data";

type propsType = {
    page: number,
    pageCount: number | null,
    incrementPage: (page: number) => void;
    decrementPage: (page: number) => void;
    setCustomPage: (page: number) => void;
};

export default function PaginationBar(props: propsType): JSX.Element {
    return (
        <div className="flex justify-center items-center pt-4 gap-3">
        <Button
          disabled={props.page === 0}
          onClick={() => props.incrementPage(props.page - 1)}
        >
          <img src={btnList2[1].base64Icon} alt="" />
        </Button>
        <div>
          <input
            className="clean-number-input w-12 text-center"
            type="number"
            defaultValue={props.page + 1}
            value={props.page + 1}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (props.pageCount && value >= 0 && value <= props.pageCount) {
                props.setCustomPage(parseInt(e.target.value));
              }
            }}
          />
        </div>
        <Button
          disabled={props.pageCount ? props.page === (props.pageCount - 1) / 10 : false}
          onClick={() => props.decrementPage(props.page + 1)}
        >
          <img className="rotate-180" src={btnList2[1].base64Icon} alt="" />
        </Button>
      </div>
    )
}