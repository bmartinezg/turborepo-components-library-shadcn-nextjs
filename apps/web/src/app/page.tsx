import Image from "next/image";
import { Badge, Demo } from "@turbo/tscn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Demo />
        <Badge variant="outline" />
      </div>
    </main>
  );
}
