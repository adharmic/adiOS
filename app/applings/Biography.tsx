import Image from "next/image";

export default function Biography() {
  return (
    <div className="text-black max-w-[600px] h-[600px] flex flex-col">
      <h1 className="text-3xl font-bold w-full border-b-2 border-cobalt">
        About Me
      </h1>
      <div className="flex flex-col text-xl h-full w-full justify-evenly">
        <Image
          className="max-w-40 border-2 border-cobalt self-center"
          src={"/images/headshot.jpg"}
          width={2500}
          height={2500}
          alt="A professional headshot of Adithya Ajith."
        />
        <p className="self-center w-full text-center">
          Call me <b> Adithya.</b>
        </p>
        <p>
          I love all things computing, but especially <b>Systems Programming</b>{" "}
          and <b>Web Application Development</b>. I&apos;m currently pursuing a{" "}
          <b>Masters&apos; Degree in Cybersecurity and Information Assurance</b>{" "}
          from WGU.
        </p>
        <p>
          When I&apos;m not programming, I&apos;m creating. I think there&apos;s
          a lot of wondrous potential in the intersection of art and technology,
          and I love exploring different electronic media as means of emotional
          and philosophical communication.
        </p>
      </div>
    </div>
  );
}
