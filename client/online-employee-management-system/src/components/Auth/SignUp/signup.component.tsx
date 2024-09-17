type propsType = {
  searchParams: searchParamsType;
};

type searchParamsType = {
  type: string;
  role: string;
};

export default function SignUp(props: propsType) {
  return (
    <div className="text-center">
      <div>back</div>
      <div>New user ? Register here </div>
      <div>
        <div>
          <input type="radio" />
          <input type="radio" />
        </div>
        <div>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
      </div>
      <div></div>
    </div>
  );
}
