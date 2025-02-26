import { Link } from "next-view-transitions";

export default function Students() {
  return (
    <div className="flex gap-8 flex-col items-center justify-center w-full h-screen bg-background text-foreground">
      <h1>Students</h1>

      <p>This is the students page</p>

      <Link href="/">Back to Home</Link>
    </div>
  );
}
