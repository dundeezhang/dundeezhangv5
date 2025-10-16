import { Activity } from "@/components/home/activity";
import { BadgeContainer } from "@/components/home/badge-container";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto mt-4 mb-8 home-page-content">
      <Activity />
      <BadgeContainer />
    </main>
  );
}
