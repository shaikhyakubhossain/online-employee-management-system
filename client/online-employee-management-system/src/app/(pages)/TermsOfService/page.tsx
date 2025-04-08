"use client";
import PageHeader from "@/components/PageHeader/page-header.component";
import { btnList2 } from "@/constants/Basic/data";
import { useRouter } from "next/navigation";

export default function TermsOfService() {
  const router = useRouter();
  return (
    <div className="font-times p-4 sm:p-6 lg:p-8 bg-gray-200 text-base sm:text-lg lg:text-xl">
      <PageHeader title="Terms of Service" />
      <div
        onClick={() => router.back()}
        className="text-base sm:text-lg fixed left-4 top-24 bg-white rounded-sm p-2 cursor-pointer"
      >
        <img className="w-6 h-6" src={btnList2[1].base64Icon} alt="Back" />
      </div>
      <pre className="mt-4 text-base sm:text-lg lg:text-xl text-justify whitespace-pre-wrap break-words bg-white p-4 rounded-lg shadow-md">
        {`
Dear Valued User, 

Thank you for choosing the Online Employee Management System (OEMS). We sincerely appreciate your trust in our platform. Our goal is to provide you with a reliable, user-friendly, and secure digital environment to help manage the diverse needs of employee administration within your organization. These Terms of Service (“Terms”) are written with the utmost transparency and respect for you as our user and partner. 
          
Please take a moment to read through this document carefully. By accessing or using our services, you are agreeing to be bound by these Terms. If you do not agree, we respectfully ask that you refrain from using the Service. 
          
--------------------------------------------------------------------------

1. Introduction 

OEMS is a comprehensive, web-based platform designed to assist organizations in managing their workforce efficiently and seamlessly. From secure login processes to attendance tracking, leave applications, and notice updates, OEMS offers a holistic approach to employee administration. We recognize the importance of your data, your team time, and the trust you place in our technology. These Terms aim to lay the foundation of that trust by clearly outlining your rights and responsibilities as a user of OEMS, as well as our responsibilities as your service provider. 

--------------------------------------------------------------------------

2. Overview of Our Services 

OEMS provides a suite of carefully crafted features aimed at streamlining internal organizational processes. These include:

i) Authentication & Authorization System: We prioritize your data security. Our robust login, registration, and role-based access control systems ensure that only authorized personnel can access specific data and features. 
ii) Dashboard: A personalized and informative homepage where users can view their attendance, upcoming events, recent notices, and pending tasks at a glance. 
iii) Notice Board: A centralized place where company-wide announcements and important updates can be posted and accessed. 
iv) Leave Management: A transparent and user-friendly interface for requesting, reviewing, and approving various types of leave. Employees can view their leave balance, track application status, and receive timely updates. 
v) Access/Assets Management Page: This feature allows users to easily access shared files, such as internal project documents, case studies, and other essential resources provided by the organization. 
vi) Attendance Page with Auto-Present Functionality: To save your time and ensure accurate records, employees are automatically marked present upon successful login. This eliminates manual check-ins and improves accountability.
vii) Calendar: A helpful view that displays events, company holidays, upcoming tasks, deadlines, and employee-specific schedules.
viii) Resignation Management: Employees can initiate and track resignation requests, while administrators can review and manage the offboarding process transparently and respectfully. 
ix) Settings: Each user has access to customizable settings to manage personal information, notification preferences, and more.

All of the above features are designed to work harmoniously to create a seamless and enjoyable experience for all stakeholders—employees, managers, and administrators alike. 

--------------------------------------------------------------------------

3. Account Registration and Access 

To use most OEMS features, you must create an account using valid organizational credentials. You are responsible for: 
i)Maintaining accurate, up-to-date profile information
ii) Keeping your password confidential 
iii) Not sharing your login credentials with others
iv) Not impersonating others or misrepresenting your identity

We humbly request that you notify us immediately if you suspect any unauthorized use of your account. You are solely responsible for the activities that occur under your login. 

--------------------------------------------------------------------------

4. Data Privacy and Confidentiality 

Your privacy is extremely important to us. We are committed to safeguarding the information you share with us. All data you provide—including but not limited to your personal information, attendance logs, leave records, and documents—is stored securely and used strictly for the intended purposes of providing our services. 
We will never sell your data or share it with unauthorized third parties. Our practices are guided by applicable data protection laws, and we invite you to review our detailed Privacy Policy to learn more about how your information is handled. 

--------------------------------------------------------------------------

5. Use of the Platform 

We encourage responsible and respectful usage of OEMS. You agree not to use the platform to:
          
i) Violate any laws or regulations 
ii) Upload or share any harmful, obscene, or unlawful content 
iii) Attempt to bypass security measures 
iv) Gain unauthorized access to features or data 
v) Upload viruses, malware, or other disruptive code 

We strive to create a safe and inclusive environment and trust our users to act with integrity. 

--------------------------------------------------------------------------

6. Service Availability 

We work diligently to ensure OEMS is available 24/7, but like any online service, we may occasionally experience downtime for maintenance or due to unforeseen circumstances. We promise to do our best to minimize disruptions and notify users in advance whenever possible. Please understand that we cannot be held liable for any loss or inconvenience caused by temporary unavailability of the platform.
          
--------------------------------------------------------------------------

7. AI and Automation Features 

OEMS incorporates intelligent features such as: 

i) Auto-attendance upon login to minimize manual input and human error 
ii) A smart dashboard that surfaces key metrics and reminders
iii) Integration-ready components for AI chatbot assistance

While we aim for high accuracy, we humbly acknowledge that AI-powered tools are not infallible and may occasionally provide imperfect results. These tools are intended to support—not replace—human judgment. 

--------------------------------------------------------------------------

8. Termination and Suspension 

We hope to maintain long-term, positive relationships with all users. However, in rare circumstances, we may be required to suspend or terminate your account if: 

i)You violate any terms listed in this agreement 
ii) Your actions compromise the security or integrity of the system 
iii) You misuse platform resources or data 

We will make every effort to notify you in advance and offer a chance to correct any issues. Upon termination, your access will be revoked, and your data may be archived or deleted based on organizational policy and legal requirements. 

--------------------------------------------------------------------------

9. Ownership and Intellectual Property 

All content, code, and branding used in OEMS—including text, images, interfaces, and underlying software—is the intellectual property of Employeeverse or its licensors. You are granted a non-exclusive, non-transferable license to use OEMS for internal organizational purposes. Any reproduction, distribution, or modification of our content without written permission is strictly prohibited. 

--------------------------------------------------------------------------

10. Feedback and Improvements 

We are constantly striving to make OEMS better for everyone. If you have suggestions, feature requests, or constructive criticism, we warmly invite you to share your thoughts with us. Many of our best ideas come from users just like you. Any feedback you provide may be used by us to improve the platform without any obligation to compensate you, and we will always respect your privacy in the process. 

--------------------------------------------------------------------------

11. Modifications to These Terms

From time to time, we may need to update these Terms to reflect changes in the law, our features, or how we operate. When we do, we will clearly communicate the update via email or on the platform itself. Your continued use of OEMS after changes go into effect will constitute your agreement to the revised Terms. We recommend checking this page occasionally for any updates. 

--------------------------------------------------------------------------

12. Limitation of Liability

While we always aim for excellence, the Service is provided “as-is” and “as-available.” We do not guarantee that all features will function perfectly at all times. To the fullest extent allowed by law, we are not liable for: 

i) Indirect, incidental, or consequential damages
ii) Loss of data 
iii) Downtime or loss of productivity 

We encourage you to back up important documents shared within the system and report issues promptly so we can resolve them. 

--------------------------------------------------------------------------

13. Indemnification 

By using OEMS, you agree to defend, indemnify, and hold harmless [Your Company Name], its team members, partners, and affiliates from any claims, losses, liabilities, or expenses arising from: 

i) Your misuse of the platform
ii) Your violation of these Terms 
iii) Any disputes arising from user-generated content 

--------------------------------------------------------------------------

14. Governing Law 

These Terms are governed by the laws of India, without regard to its conflict of law provisions. You agree that any legal dispute will be resolved in the jurisdiction of Cuttack. 

--------------------------------------------------------------------------

15. Contact Us 

We are here to support you every step of the way. If you have any questions about these Terms or anything related to your use of OEMS, please do not hesitate to reach out. 

Employeeverse
Email: employeeverse@gmail.com
Phone: +91 8144772854 
Address: DRIEMS University, Tangi, Cuttack, Odisha, India

--------------------------------------------------------------------------

Final Words 

We believe that technology should empower people—not overwhelm them. Our sincere mission with OEMS is to simplify day-to-day employee management, promote fairness and transparency, and create a digital workspace that everyone enjoys using. 

Thank you once again for your trust and support. We look forward to continuing this journey with you. 

With appreciation, 
Team Elite Six`}
      </pre>
    </div>
  );
}
