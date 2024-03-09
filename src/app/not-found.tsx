import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center align-baseline">
      <p className="m-3">Not Found</p>
      <Link href={"/"} className="m-2">
        Go Back
      </Link>
    </div>
  );
};
export default NotFound;
