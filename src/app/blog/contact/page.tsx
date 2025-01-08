import Link from "next/link";

const Page = () => {
  return (
    <>
      <h1 className="text-customBlue text-3xl">Contact</h1>
      <p className={"mb-4"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, architecto
        natus, cumque laborum, error consequuntur eaque expedita numquam eveniet
        quas sunt possimus eligendi minus omnis sapiente sequi cum magni
        distinctio?
      </p>
      <div>
        <h3 className="text-customBlue text-2xl">Get in Touch</h3>
        <ul style={{ listStyle: "none" }}>
          <li>
            <span>
              Email:{" "}
              <Link href="mailto:contact@example.com">contact@example.com</Link>
            </span>
          </li>
          <li>
            <span>
              Website: <a href="https://www.example.com">www.example.com</a>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Page;
