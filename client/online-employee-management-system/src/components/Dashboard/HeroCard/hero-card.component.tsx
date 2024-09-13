import type { btnListType } from "@/constants/Dashboard/data";

type propsType = {
  btnList: btnListType;
};

export default function HeroCard(props: propsType): JSX.Element {
  return (
    <div>
      <div>
        <div>
          <div>{props.btnList.name}</div>
          <div>
            <img src={props.btnList.base64Icon} alt="" />
          </div>
        </div>
        <div>{props.btnList.detail}</div>
      </div>
      <div></div>
    </div>
  );
}
