export default function Header(props) {
  const {
    headerColor,
    textColor,
    name,
    borderColor
  } = props;
  return (
    <h1 className={`${headerColor ? headerColor: "bg-white"} ${textColor ? textColor : "text-transparent"} ${borderColor ? borderColor : "bg-white"} shadow-2xl my-4 mx-3 py-5 px-3 text-6xl text-center border-3 border-solid rounded-2xl select-none`}>
      {name}
    </h1>
  );
}
//bg-palette, border-palette, text-palette