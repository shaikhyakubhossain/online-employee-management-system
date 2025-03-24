"use client"; // Add this at the top

import { useEffect, useState } from "react";
import HeroHeader from "@/components/Dashboard/HeroHeader/hero-header.component";
import HeroContent from "@/components/Dashboard/HeroContent/hero-content.component";
import SubHeaderContainer from "@/components/Dashboard/SubHeaderContainer/sub-header-container.component";

interface Employee {
  employeeId: string;
  username: string;
  firstName: string;
  lastName: string;
}

export default function Dashboard() {
  const [topEmployee, setTopEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    fetch(
      "https://online-employee-management-system.onrender.com/top-employees"
    ) // Fetch data from FastAPI backend
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setTopEmployee(data[0]); // Get the highest-ranked employee
        }
      })
      .catch((err) => console.error("Error fetching top employee:", err));
  }, []);

  return (
    <div className="font-times">
      <HeroHeader
        greeting="Welcome"
        title="Hello"
        message="You can manage your things from here"
        showEmoji={true}
        showCurrentUserName={true}
        showSvg={true}
      />
      <SubHeaderContainer />
      <HeroHeader
        greeting="We congratulate"
        title="Employee of the Year"
        message={
          topEmployee
            ? `#${topEmployee.employeeId} - ${topEmployee.firstName} ${topEmployee.lastName} (@${topEmployee.username})`
            : "Loading..."
        }
        showEmoji={false}
        showCurrentUserName={false}
        swapTextLocation={true}
        showSvg={false}
      />
      <HeroContent />
    </div>
  );
}
