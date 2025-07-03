export default function SectionHeader({ name }: { name: string }) {
  return (
    <div className="text-lg border font-semibold w-fit flex justify-center p-3 px-5  bg-green-50 text-green-600 rounded-full m-auto">
      {name}
    </div>
  );
}
