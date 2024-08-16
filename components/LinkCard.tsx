import { GoArrowUpRight } from 'react-icons/go';

export default function Footer({
  link,
  title,
  desc,
}: {
  link: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col">
      <a className="mx-auto mt-1 flex flex-col max-w-fit items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-6 p-2 transition-all duration-75">
        <div className="flex flex-row space-x-3 text-center justify-center">
          <p className="font-medium text-gray-600 text-2xl">{title}</p>
          <a className="text-2xl text-black">
            <GoArrowUpRight />
          </a>
        </div>
        <p className="text-lg">{desc}</p>
      </a>
    </div>
  );
}
