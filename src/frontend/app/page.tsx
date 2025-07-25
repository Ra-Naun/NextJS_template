import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <div>HOME</div>
      <Link href="/test">go to test</Link>
    </div>
  );
}
