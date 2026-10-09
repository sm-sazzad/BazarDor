// components/SectionError.tsx
export default function SectionError({
  message,
  msg,
}: {
  message: string;
  msg: string;
}) {
  return (
    <div className="w-[80%] mx-auto my-5">
      <h1 className="font-bold text-2xl">{msg}</h1>
      <div className="border text-xl border-gray-200 text-red-600 p-16 rounded-2xl text-center">
        <p>{message}</p>
      </div>
    </div>
  );
}
