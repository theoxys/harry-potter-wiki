import { Link } from "next-view-transitions";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-background text-foreground">
      <h1>Hello World</h1>

      <Link href="/list/students">Students</Link>
      <Link href="/list/staff">Staff</Link>
    </div>
  );
}
