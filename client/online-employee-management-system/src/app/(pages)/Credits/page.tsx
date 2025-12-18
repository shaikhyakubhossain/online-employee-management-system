import PageHeader from "@/components/PageHeader/page-header.component";
import Link from "next/link";
import { btnList2 } from "@/constants/Basic/data";

const teamMembers = [
  {
    name: "Shaikh Yakub Hossain",
    regdNo: "DRMU2221229012",
    designation: "Full Stack Developer",
    photoUrl: "https://avatars.githubusercontent.com/u/74724579?v=4",
    webUrl: "https://yakubhossain.vercel.app/",
    github: "https://github.com/shaikhyakubhossain",
    linkedin: "https://www.linkedin.com/in/shaikh-yakub-hossain/",
  },
  {
    name: "Samarjit Sahoo",
    regdNo: "DRMU2101229204",
    designation: "Machine Learning Engineer",
    photoUrl: "https://avatars.githubusercontent.com/u/145245473?v=4",
    webUrl: "https://samarjit.vercel.app/",
    github: "https://github.com/samarjitsahoo",
    linkedin: "https://www.linkedin.com/in/samarjitsahoo",
  },
  {
    name: "Soumya Das",
    regdNo: "DRMU2221229014",
    designation: "Database Administrator",
    photoUrl: "https://avatars.githubusercontent.com/u/181587082?v=4",
    github: "https://github.com/soumya-das22",
    linkedin: "https://www.linkedin.com/in/soumya-das-46510a29a/",
  },
  {
    name: "Soumya Ranjan Satapathy",
    regdNo: "DRMU2221229016",
    designation: "UI/UX Designer",
    photoUrl: "https://avatars.githubusercontent.com/u/111912787?v=4",
    webUrl: "https://portfoliosrs.vercel.app/",
    github: "https://github.com/Bot-srs",
    linkedin: "https://www.linkedin.com/in/soumya-ranjan-satapathy-837333251/",
  },
  {
    name: "Shaik Ahesanuddin",
    regdNo: "DRMU2221229011",
    designation: "QA Engineer",
    photoUrl: "https://avatars.githubusercontent.com/u/179226225?v=4",
    github: "https://github.com/ShaikAhesanuddin",
    linkedin: "https://www.linkedin.com/in/shaik-ahesanuddin-3399b6307/",
  },
];

export default function Credits() {
  return (
    <div className="font-times p-8 bg-gray-200 text-xl min-h-screen">
      <PageHeader title="Credits" />
      <Link href={"/"}>
        <div className="text-xl text-left fixed left-4 top-24 bg-white rounded-sm p-2">
          <img className="w-6 h-6" src={btnList2[1].base64Icon} alt="" />
        </div>
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <img
              src={member.photoUrl}
              alt={`${member.name}'s photo`}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-500">Regd. No.: {member.regdNo}</p>
            <p className="text-lg text-gray-700">{member.designation}</p>

            <div className="flex justify-center space-x-4 mt-4">
              {member.webUrl && (
                <a
                  href={member.webUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Website
                </a>
              )}
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
