import Image from "next/image";

interface props {
  name: string;
  description: string;
  right: boolean;
  image: string;
}
export default function Card(props: props) {
  return (
    <div className="rounded-2xl min-h-64 mt-10 p-10 flex justify-center gap-10">
      {props.right ? (
        <>
          <div>
            <Image
              src={props.image}
              alt={props.name}
              width={350}
              height={330}
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div className="max-w-xl ml-8">
            <h1 className="text-2xl font-semibold text-[#06a777]">
              {props.name}
            </h1>
            <p className="mt-5 font-medium text-md">{props.description}</p>
          </div>
        </>
      ) : (
        <>
          <div className="max-w-xl">
            <h1 className="text-2xl font-semibold text-[#06a777]">
              {props.name}
            </h1>
            <p className="mt-5 font-medium text-md">{props.description}</p>
          </div>
          <div className="ml-8">
            <Image
              src={props.image}
              alt={props.name}
              width={350}
              height={330}
              className="rounded-xl shadow-2xl"
            />
          </div>
        </>
      )}
    </div>
  );
}
