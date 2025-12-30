import Link from "next/link";

export default function Finder() {
  return (
    <div className="animate-slide-down md:w-5/6 mx-auto my-5 text-center shadow-lg rounded-2xl p-6 bg-white border border-gray-200">
      <p className="text-2xl font-semibold text-gray-800 heading mb-2">
        AA Group Finder
      </p>
      <p className="text-sm text-gray-600 pb-4">
        (Other meetings can be found on{" "}
        <Link className="font-semibold underline text-blue-600 hover:text-blue-700" href="/support">
          Groups/Resources
        </Link>{" "}
        page.)
      </p>
      <iframe
        className="shadow-md rounded-xl border border-gray-200"
        frameBorder="0"
        height="600px"
        width="100%"
        src="https://www.vancouveraa.org/meetings/"
      ></iframe>
    </div>
  );
}
