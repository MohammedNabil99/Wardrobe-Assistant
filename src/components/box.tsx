import Image from "next/image";

interface BoxProps {
  img: string;
  title: string;
  description: string;
}

export default function Box({ img, title, description }: BoxProps) {
  return (
    <div className="border p-4 rounded-lg shadow-2xl border-gray-400 max-w-xs flex flex-col gap-4 w-full items-center">
      <Image src={img} width={150} height={150} alt={description} />
      <h2 className="font-bold text-xl">{title}</h2>
      <p>{description}</p>
    </div>
  );
}
