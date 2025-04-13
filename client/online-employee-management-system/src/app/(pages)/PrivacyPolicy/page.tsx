"use client";
import PageHeader from "@/components/PageHeader/page-header.component";
import { btnList2 } from "@/constants/Basic/data";
import { useRouter } from "next/navigation";

export default function PrivacyPolicy() {
  const router = useRouter();
  return (
    <div className="font-times p-4 sm:p-6 lg:p-8 bg-gray-100 text-base sm:text-lg lg:text-xl">
      <PageHeader title="Privacy Policy" />
      <div
        onClick={() => router.back()}
        className="text-base sm:text-lg fixed left-4 top-24 bg-white rounded-sm p-2 cursor-pointer"
      >
        <img className="w-6 h-6" src={btnList2[1].base64Icon} alt="Back" />
      </div>
      <pre className="mt-4 text-base sm:text-lg lg:text-xl text-justify whitespace-pre-wrap break-words bg-white p-4 rounded-lg shadow-md">
        {`
Thank you for trusting the Online Employee Management System (OEMS). Your privacy is of utmost importance to us. This Privacy Policy explains how we collect, use, store, and protect your personal data while ensuring full transparency and compliance with applicable laws.

--------------------------------------------------------------------------

1. Information We Collect

When you use OEMS, we may collect the following types of information:

i) Personal Details: Name, email address, phone number, designation, etc.
ii) Employment Data: Attendance records, leave history, resignation details, and departmental roles.
iii) System Usage Data: Login history, time logs.
iv) Uploaded Files: Any documents shared or accessed within the platform.
v) Cookies and Analytics Data: Used to improve system performance and provide insights into usage patterns.

--------------------------------------------------------------------------

2. How We Use Your Information

We only collect data that is necessary to deliver a smooth, secure, and customized user experience. Your data may be used to:

i) Authenticate users and control access to features (via secure tokens)
ii) Maintain accurate employee records
iii) Enable internal communication and leave processing
iv) Improve system performance, functionality, and user experience
v) Analyze system usage to detect and prevent misuse

--------------------------------------------------------------------------

3. Authentication & Authorization

We employ secure, role-based authentication and authorization protocols. All login sessions are encrypted, and secure tokens are used to validate each request. This ensures:

i) Only authorized personnel can access certain areas of the platform
ii) Data integrity is maintained across all services
iii) User sessions are verified continuously to prevent unauthorized access

--------------------------------------------------------------------------

4. Data Storage and Security

All data is securely stored in a MongoDB database, which is managed with strict access controls. We implement industry-standard security measures, including:

i) Data encryption at rest and in transit
ii) Regular vulnerability assessments and patch management
iii) Firewalls and access control policies
iv) Secure password hashing (e.g., bcrypt)

--------------------------------------------------------------------------

5. Data Sharing and Disclosure

We do **not** sell or rent your personal data to any third party. We may only share data in the following scenarios:

i) With authorized administrators of your organization
ii) With law enforcement, if required by legal obligation
iii) With trusted infrastructure partners for hosting, under NDA and strict data policies

--------------------------------------------------------------------------

6. Your Rights and Choices

You have the right to:

i) Access your data and view profile information
ii) Correct inaccurate data or request its removal (subject to company policy)
iii) Request clarification on how your data is used
iv) Opt-out of any optional data tracking (e.g., analytics cookies)

--------------------------------------------------------------------------

7. Data Retention

We retain your information for as long as your account remains active or as required by company and legal policies. Upon termination, data may be archived securely or deleted based on policy.

--------------------------------------------------------------------------

8. Children's Privacy

OEMS is not designed for individuals under the age of 18. We do not knowingly collect personal data from minors. If we learn that we have inadvertently collected such data, we will delete it immediately.

--------------------------------------------------------------------------

9. Updates to This Policy

We may occasionally update this Privacy Policy to reflect changes in technology, law, or our services. Users will be notified of significant changes through email or platform alerts. Continued use of OEMS after such updates signifies acceptance.

--------------------------------------------------------------------------

10. Contact Us

If you have any questions, concerns, or feedback regarding this Privacy Policy or your data, feel free to reach out to us:

Employeeverse  
Email: employeeverse@gmail.com  
Phone: +91 8144772854  
Address: DRIEMS University, Tangi, Cuttack, Odisha, India

--------------------------------------------------------------------------

Final Note

Your trust is our top priority. At OEMS, we believe data privacy isn’t just a legal requirement—it’s a responsibility. We are committed to protecting your data and ensuring a transparent and secure digital experience for every user.

With respect,  
Team Elite Six
`}
      </pre>
    </div>
  );
}
