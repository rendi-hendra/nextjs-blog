export default function Card(props) {
  return (
    <a
      href="#"
      className="block p-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-lg hover:bg-gray-100"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-zinc-900">
        {props.judul}
      </h5>
      <p className="font-normal text-gray-700">{props.isi}</p>
    </a>
  );
}
