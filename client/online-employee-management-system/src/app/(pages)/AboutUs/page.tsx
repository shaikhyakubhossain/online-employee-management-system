import PageHeader from "@/components/PageHeader/page-header.component";
import Link from "next/link";
import { btnList2 } from "@/constants/Basic/data";

export default function AboutUs() {
  return (
    <div className="font-times p-4 sm:p-6 lg:p-8 bg-gray-200 text-base sm:text-lg lg:text-xl">
      <PageHeader title="About Us" />
      <Link href={"/"}>
        <div className="text-base sm:text-lg fixed left-4 top-24 bg-white rounded-sm p-2">
          <img className="w-6 h-6" src={btnList2[1].base64Icon} alt="" />
        </div>
      </Link>
      <img
        src="favicon.ico"
        alt=""
        className="mx-auto block w-28 sm:w-36 lg:w-36"
      />
      <p className="mt-4 text-base sm:text-lg lg:text-xl text-justify">
        At Employee Verse, we are dedicated to revolutionizing the way
        organizations manage their workforce through our innovative Online
        Employee Management System (OEMS). Our platform is designed with the
        modern workplace in mind, seamlessly integrating advanced features that
        empower both employees and employers to enhance productivity and
        streamline communication. Employee Verse offers a comprehensive suite of
        tools, including real-time employee tracking, leave management, access
        to academic materials, all housed within a user-friendly interface. We
        understand that the cornerstone of any successful organization lies in
        its people, which is why our system prioritizes employee engagement and
        satisfaction. With customizable profiles, employees can access their
        personal data, track their achievements, and participate in professional
        development opportunities, fostering a culture of growth and
        collaboration. Our team of dedicated developers, designers, and industry
        experts has crafted Employee Verse to ensure it meets the unique needs
        of diverse organizations, regardless of size or industry. We believe in
        the power of technology to transform HR processes, making them more
        efficient and effective, and we are committed to providing ongoing
        support and enhancements as businesses evolve. Employee Verse is not
        just a tool; it is a partner in your organization&#39;s journey toward
        operational excellence and employee empowerment, ultimately driving
        success and fostering a thriving workplace culture.
      </p>
    </div>
  );
}
