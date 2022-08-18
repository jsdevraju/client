export default function ({ error, visible }) {
  if (!error || !visible) return null;
  return <p className="text-[14px] text-red-400 mx-2">{error}</p>;
}
