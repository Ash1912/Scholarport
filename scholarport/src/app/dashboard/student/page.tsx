import { UserButton, currentUser } from "@clerk/nextjs";
import DashboardCard from "@/components/DashboardCard";
import AIChatBox from "@/components/AIChatBox";

export default async function StudentDashboard() {
  const user = await currentUser();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Welcome, {user?.firstName}</h1>
        <UserButton afterSignOutUrl="/" />
      </div>

      {/* NEW SECTION STARTS */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardCard title="Applications" description="Track all your application." />
        <DashboardCard title="Documents" description="Upload and manage documents." />
        <DashboardCard title="Messages" description="Chat with your assigned counselor." />
        <DashboardCard title="Visa Updates" description="Stay updated on visa processes." />
      </div>

      <div className="mt-10">
        <AIChatBox />
      </div>
      {/* NEW SECTION ENDS */}
    </div>
  );
}
