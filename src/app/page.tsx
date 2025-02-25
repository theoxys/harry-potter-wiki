import { Link } from "next-view-transitions";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-background text-foreground">
      <h1>Hello World</h1>

      <Link href="/admin">Admin</Link>
    </div>
  );
}
