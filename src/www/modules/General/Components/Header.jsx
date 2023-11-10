export default function Header({ name }) {
  return (
    <h1 className="text-palette5 bg-palette8 my-3 mx-3 py-5 px-3 text-6xl text-center border-3 border-solid border-palette5 rounded-2xl">
      {name}
    </h1>
  );
}
