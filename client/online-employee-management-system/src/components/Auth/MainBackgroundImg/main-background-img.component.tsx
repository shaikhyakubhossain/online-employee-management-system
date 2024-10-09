type propsType = {
  customTW?: string;
};

export const MainBackgroundImg = (props: propsType) => {
  return (
      <img
      className={`fixed top-0 left-0 w-full h-full -z-[1] opacity-85 ${props.customTW}`}
        // src="https://drive.google.com/thumbnail?id=1BjLxXodycVILUUQ4rKuaNdcWVFqGG085"
        src="https://cdn.pixabay.com/photo/2021/12/15/17/16/technology-6873012_1280.jpg"
        alt="bg"
      />
  );
};
