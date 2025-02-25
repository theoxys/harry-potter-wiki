import { Link } from "next-view-transitions";

export default function Admin() {
  return (
    <div className="flex gap-8 flex-col items-center justify-center w-full h-screen bg-background text-foreground">
      <h1>Admin</h1>

      <p>This is the admin page</p>

      <Link href="/">Back to Home</Link>
    </div>
  );
}
