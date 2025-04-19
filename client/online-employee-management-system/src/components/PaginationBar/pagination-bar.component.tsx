import { useState, useEffect } from "react";
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
  const [inputValue, setInputValue] = useState<string>(
    (props.page + 1).toString()
  );

  // Sync inputValue when props.page changes (e.g., from buttons)
  useEffect(() => {
    setInputValue((props.page + 1).toString());
  }, [props.page]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      // only allow digits
      setInputValue(value);
    }
  };

  const handleInputSubmit = () => {
    const numericValue = parseInt(inputValue);
    if (!isNaN(numericValue) && numericValue > 0) {
      props.setCustomPage(numericValue - 1);
    } else {
      setInputValue((props.page + 1).toString());
    }
  };

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
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleInputSubmit();
            }
          }}
        />
      </div>
      <Button
        disabled={props.pageCount ? props.page >= props.pageCount - 1 : false}
        onClick={() => props.decrementPage(props.page + 1)}
      >
        <img className="rotate-180" src={btnList2[1].base64Icon} alt="" />
      </Button>
    </div>
  )
}