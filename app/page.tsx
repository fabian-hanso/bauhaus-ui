import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white w-screen h-dvh bg-red-100 flex flex-col justify-center items-center">
      <div>
        <Image
          src="/logo.svg"
          width={300}
          height={300}
          alt="Logo"
          className="w-24 md:w-40"
        />
      </div>
      <div className="mt-6">
        <p className="text-gray-600 text-center px-6 md:px-0">
          We&apos;re actually working on this site. Please visit our{" "}
          <a
            href="https://www.linkedin.com/company/bauhaus-ui"
            className="text-blue"
          >
            LinkedIn
          </a>{" "}
          and{" "}
          <a href="https://www.instagram.com/bauhaus_ui/" className="text-red">
            Instagram
          </a>{" "}
          page for further information.
        </p>
      </div>
    </div>
  );
}
