import Link from "next/link";
import Image from "next/image";
import styles from "@/app/ui/styles/home.module.css";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 relative">
        <div className="bg-white border-2 border-blue-100 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center">
            <h1 className={`text-4xl font-bold mb-4 ${styles.text_naval}`}>
              Welcome
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Massa urna magnis dignissim id euismod porttitor vitae etiam
              viverra nunc at adipiscing sit morbi aliquet mauris porttitor
              nisi, senectus pharetra, ac porttitor orci.
            </p>
            <Link
              href={"/blog/posts"}
              className={`outline outline-1 outline-offset-2 border-purple-700 hover:text-white py-2 px-4 mb-2 rounded hover:bg-customBlue md:w-auto ${styles.text_naval} ${styles.fit_content}`}
            >
              Visit Blog
            </Link>
          </div>
          <div className="relative flex justify-center item-center">
            <Image
              src={"/image-desktop.jpeg"}
              width={800}
              height={560}
              className={"hidden md:block z-10 rounded-3xl"}
              alt={"desktop image"}
            />
            <Image
              src={"/image-mobile.jpeg"}
              width={560}
              height={620}
              className={"block md:hidden rounded-lg"}
              alt={"desktop image"}
            />
          </div>
        </div>
      </div>
      <div
        className={`${styles.bg_naval} hidden md:block absolute top-0 right-0 bottom-0 left-2/3 z-0`}
      ></div>
    </main>
  );
}
