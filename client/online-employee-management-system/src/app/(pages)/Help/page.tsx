import PageHeader from "@/components/PageHeader/page-header.component";
import Link from "next/link";
import { btnList2 } from "@/constants/Basic/data";

export default function Help() {
  return (
    <div
      className="font-times p-6 md:p-8 bg-gray-200 text-lg md:text-xl"
      id="help-container"
    >
      <PageHeader title="Help" />
      <Link href={"/"}>
        <div className="text-lg md:text-xl text-left fixed left-4 top-24 bg-white rounded-sm p-2">
          <img className="w-6 h-6" src={btnList2[1].base64Icon} alt="" />
        </div>
      </Link>

      {/* Table of Contents */}
      <section className="mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          Table of Contents
        </h2>
        <ul className="list-disc pl-4 md:pl-8 space-y-2">
          <li>
            <a
              href="#getting-started"
              className="text-blue-800 hover:underline"
            >
              Getting Started
            </a>
          </li>
          <li>
            <a href="#dashboard" className="text-blue-800 hover:underline">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#notice" className="text-blue-800 hover:underline">
              Notice
            </a>
          </li>
          <li>
            <a
              href="#apply-for-leave"
              className="text-blue-800 hover:underline"
            >
              Apply for Leave
            </a>
          </li>
          <li>
            <a href="#approve-leave" className="text-blue-800 hover:underline">
              Approve Leave (for Admin only)
            </a>
          </li>
          <li>
            <a href="#access-assets" className="text-blue-800 hover:underline">
              Access/Assets Page
            </a>
          </li>
          <li>
            <a href="#attendance" className="text-blue-800 hover:underline">
              Attendance
            </a>
          </li>
          <li>
            <a href="#holiday" className="text-blue-800 hover:underline">
              Holiday
            </a>
          </li>
          <li>
            <a
              href="#employee-details"
              className="text-blue-800 hover:underline"
            >
              Employee Details
            </a>
          </li>
          <li>
            <a
              href="#managing-employee-profiles"
              className="text-blue-800 hover:underline"
            >
              Managing Employee Profiles
            </a>
          </li>
          <li>
            <a href="#calendar" className="text-blue-800 hover:underline">
              Calendar
            </a>
          </li>
          <li>
            <a href="#chat" className="text-blue-800 hover:underline">
              Chat
            </a>
          </li>
          <li>
            <a href="#chatbot" className="text-blue-800 hover:underline">
              Chatbot
            </a>
          </li>
          <li>
            <a href="#notifications" className="text-blue-800 hover:underline">
              Notifications
            </a>
          </li>
          <li>
            <a href="#profile" className="text-blue-800 hover:underline">
              Profile
            </a>
          </li>
          <li>
            <a href="#contact-us" className="text-blue-800 hover:underline">
              Contact Us
            </a>
          </li>
        </ul>
      </section>

      {/* Sections */}
      <section id="getting-started" className="pt-20 md:pt-24">
        <h2 className="text-lg md:text-xl font-semibold mb-3">
          Getting Started
        </h2>
        <ul className="list-disc pl-4 md:pl-8 space-y-2">
          <li>Login with your organization-provided credentials.</li>
          <li>Access the Dashboard to see quick insights.</li>
          <li>Navigate through the left sidebar for all functionalities.</li>
          <li>
            Customize your profile settings for a personalized experience.
          </li>
        </ul>
      </section>

      <section id="dashboard" className="pt-20 md:pt-24">
        <h2 className="text-lg md:text-xl font-semibold mb-3">Dashboard</h2>
        <ul className="list-disc pl-4 md:pl-8 space-y-2">
          <li>Get access to everything you need from the Dashboard.</li>
          <li>
            See an overview of your tasks, leave requests, and notifications.
          </li>
          <li>
            Get quick insights into company-wide metrics and announcements.
          </li>
          <li>Admins can manage employee attendance and leave requests.</li>
        </ul>
      </section>

      <section id="notice" className="pt-20 md:pt-24">
        <h2 className="text-lg md:text-xl font-semibold mb-3">Notice</h2>
        <ul className="list-disc pl-4 md:pl-8 space-y-2">
          <li>Navigate to Notices from Left menu bar.</li>
          <li>View company announcements and important notices.</li>
          <li>Receive notifications about new notices added.</li>
          <li>Admins can create and manage notices for employees.</li>
        </ul>
      </section>

      <section id="apply-for-leave" className="pt-20 md:pt-24">
        <h2 className="text-lg md:text-xl font-semibold mb-3">
          Apply for Leave
        </h2>
        <ul className="list-disc pl-4 md:pl-8 space-y-2">
          <li>Select leave type (Casual, Sick, Paid) from the list.</li>
          <li>Pick the start and end date of your leave period.</li>
          <li>Submit the leave request and await approval.</li>
          <li>Get notifications for approvals or rejections.</li>
        </ul>
      </section>

      <section id="approve-leave" className="pt-20 md:pt-24">
        <h2 className="text-lg md:text-xl font-semibold mb-3">
          Approve Leave (for Admin only)
        </h2>
        <ul className="list-disc pl-4 md:pl-8 space-y-2">
          <li>Review pending leave applications from employees.</li>
          <li>Check employee leave balance and performance record.</li>
          <li>Approve or reject the leave request.</li>
          <li>Send notifications to employees about leave status changes.</li>
        </ul>
      </section>

      <section id="access-assets" className="pt-20 md:pt-24">
        <h2 className="text-lg md:text-xl font-semibold mb-3">
          Access/Assets Page
        </h2>
        <ul className="list-disc pl-4 md:pl-8 space-y-2">
          <li>
            Browse academic materials and documents from Left menu Assets Page.
          </li>
          <li>
            Upload important resources like reports and manuals (for admins).
          </li>
          <li>Download available files for personal use or reference.</li>
          <li>Manage and categorize resources for better accessibility.</li>
        </ul>
      </section>

      <section id="attendance" className="pt-20 md:pt-24">
        <h2 className="text-lg md:text-xl font-semibold mb-3">Attendance</h2>
        <ul className="list-disc pl-4 md:pl-8 space-y-2">
          <li>Navigate to Attendance page from Left menu bar.</li>
          <li>Employees can give attendance.</li>
          <li>Everyday attendance will be recorded in the database.</li>
          <li>Admins can view Attendance percentage for an Employee.</li>
        </ul>
      </section>

      <section id="holiday" className="pt-20 md:pt-24">
        <h2 className="text-lg md:text-xl font-semibold mb-3">Holiday</h2>
        <ul className="list-disc pl-4 md:pl-8 space-y-2">
          <li>Navigate to the Holiday page from Left menu bar.</li>
          <li>View the list of public company holidays and breaks.</li>
          <li>Track upcoming holidays and prepare your schedule.</li>
          <li>Interact with the Calendar for specific holiday details.</li>
        </ul>
      </section>

      <section id="employee-details" className="pt-20 md:pt-24">
        <h2 className="text-lg md:text-xl font-semibold mb-3">
          Employee Details
        </h2>
        <ul className="list-disc pl-4 md:pl-8 space-y-2">
          <li>View personal and professional details of employees.</li>
          <li>Check employee performance reviews and records.</li>
          <li>Track attendance and leave history.</li>
          <li>Admins can update employee roles and permissions.</li>
        </ul>
      </section>

      <section id="managing-employee-profiles" className="pt-20 md:pt-24">
        <h2 className="text-lg md:text-xl font-semibold mb-3">
          Managing Employee Profiles
        </h2>
        <ul className="list-disc pl-4 md:pl-8 space-y-2">
          <li>Navigate to Employee Profiles from Left menu bar.</li>
          <li>View and edit employee profiles and details.</li>
          <li>Update employee roles and access privileges.</li>
          <li>Archive or deactivate profiles as necessary.</li>
        </ul>
      </section>

      <section id="calendar" className="pt-20 md:pt-24">
        <h2 className="text-lg md:text-xl font-semibold mb-3">Calendar</h2>
        <ul className="list-disc pl-4 md:pl-8 space-y-2">
          <li>Access the Calendar from the Left menu bar.</li>
          <li>View all upcoming holidays and events.</li>
          <li>Check daily attendance and holiday status.</li>
          <li>Interact with the calendar to plan your work schedule.</li>
        </ul>
      </section>

      <section id="chat" className="pt-20 md:pt-24">
        <h2 className="text-lg md:text-xl font-semibold mb-3">Chat</h2>
        <ul className="list-disc pl-4 md:pl-8 space-y-2">
          <li>Access the Chat page from the Left menu bar.</li>
          <li>Interact with team members through real-time messaging.</li>
          <li>Send files and documents through chat.</li>
          <li>Keep track of ongoing conversations and notifications.</li>
        </ul>
      </section>

      <section id="chatbot" className="pt-20 md:pt-24">
        <h2 className="text-lg md:text-xl font-semibold mb-3">Chatbot</h2>
        <ul className="list-disc pl-4 md:pl-8 space-y-2">
          <li>Engage with the Chatbot for quick assistance.</li>
          <li>Get answers to common queries instantly.</li>
          <li>Access resources and documents through Chatbot commands.</li>
          <li>Get notifications and updates from the Chatbot.</li>
        </ul>
      </section>

      <section id="notifications" className="pt-20 md:pt-24">
        <h2 className="text-lg md:text-xl font-semibold mb-3">Notifications</h2>
        <ul className="list-disc pl-4 md:pl-8 space-y-2">
          <li>Check notifications for important updates and messages.</li>
          <li>Get alerts for leave requests, approvals, and rejections.</li>
          <li>Stay updated on company news and announcements.</li>
          <li>Manage your notification preferences in settings.</li>
        </ul>
      </section>

      <section id="profile" className="pt-20 md:pt-24">
        <h2 className="text-lg md:text-xl font-semibold mb-3">Profile</h2>
        <ul className="list-disc pl-4 md:pl-8 space-y-2">
          <li>View and edit your personal profile information.</li>
          <li>Update your contact details and preferences.</li>
          <li>Change your password and security settings.</li>
          <li>Log out from your profile when done.</li>
        </ul>
      </section>

      <section id="contact-us" className="pt-20 md:pt-24">
        <h2 className="text-lg md:text-xl font-semibold mb-3">Contact Us</h2>
        <ul className="list-disc pl-4 md:pl-8 space-y-2">
          <li>Reach out for support or queries through the Contact Us page.</li>
          <li>Fill out the contact form with your details and message.</li>
          <li>Expect a response from the support team shortly.</li>
          <li>Provide feedback about your experience with the system.</li>
        </ul>
      </section>
    </div>
  );
}
