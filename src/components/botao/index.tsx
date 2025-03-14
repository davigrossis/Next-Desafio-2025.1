import Link from "next/link";

export default function Botao({ color, text, link }: { color: string; text: string; link: string }) {
  return (
    <Link href={link} className="block">
      <button className={`bg-${color} px-8 py-4 uppercase text-black font-oswald text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-semibold border-solid border-2 border-black rounded-xl duration-200 hover:bg-white`}>
        {text}
      </button>
    </Link>
  );
}
