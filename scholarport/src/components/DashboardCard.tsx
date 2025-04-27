// src/components/DashboardCard.tsx
"use client";

import { motion } from "framer-motion";

interface DashboardCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function DashboardCard({ title, description, icon }: DashboardCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="p-6 bg-white rounded-2xl shadow-md border hover:shadow-lg transition"
    >
      <div className="flex items-center space-x-4">
        {icon && <div className="text-blue-500">{icon}</div>}
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

<DashboardCard
  title="Applications"
  description="View and track your applications."
  icon={<i className="ri-file-list-line text-3xl" />} // example with remix icons
/>
