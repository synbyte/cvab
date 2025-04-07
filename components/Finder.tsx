import Link from "next/link";

export default function Finder() {
  return (
    <div className=" md:w-5/6 mx-auto my-5  text-center  text-white shadow-sm shadow-gray-400 rounded-2xl p-3 bg-cyan-50/10 backdrop-blur-sm">
      <p className=" text-2xl font-medium text-cyan-800 heading">
        AA Group Finder
      </p>
      <p className="text-sm text-cyan-800 pb-3">
        (Other meetings can be found on{" "}
        <Link className="font-medium underline" href="/support">
          Groups/Resources
        </Link>{" "}
        page.)
      </p>
      <iframe
        className="shadow-sm rounded-2xl shadow-gray-400"
        frameBorder="0"
        height="600px"
        width="100%"
        src="https://www.vancouveraa.org/meetings/"
      ></iframe>
    </div>
  );
}
