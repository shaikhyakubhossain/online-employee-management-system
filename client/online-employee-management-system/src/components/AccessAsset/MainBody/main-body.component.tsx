"use client";
import Section from "../Section/section.component";
import { useState, useEffect } from "react";
import { getUrl } from "@/constants/url";
import type { gDriveFolderDataType } from "@/constants/Types/response-data";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";


export default function MainBody(): JSX.Element {

  const {token, role} = useSelector((state: RootState) => state.authDetail);

  const [dataProject, setDataProject] = useState<gDriveFolderDataType[] | null>(null);
  const [dataCaseStudy, setDataCaseStudy] = useState<gDriveFolderDataType[] | null>(null);
  const [showDropDown, setShowDropDown] = useState(false);

  const fetchData = async (section: string, setter: (data: gDriveFolderDataType[]) => void) => {
    console.log(section);
    try {
      const response = await fetch(`${getUrl()}/get-pdf-data?section=${section}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            role: "both",
            Authorization: `Bearer ${token}`,
          },
        });
      const data = await response.json();
      console.log(data);
      setter(data.data);
    } catch (error) {
      console.error(`Error fetching ${section} data:`, error);
    }
  };

  useEffect(() => {
    if (dataProject === null) fetchData("project", setDataProject);
    if (dataCaseStudy === null) fetchData("caseStudy", setDataCaseStudy);
  }, []);

  const folderLinks = {
    project:
      "https://drive.google.com/drive/folders/1Tje6o1_K3awW0NEWfGvw02cYgcl4zech?usp=sharing",
    caseStudy:
      "https://drive.google.com/drive/folders/1RxgeOZoYDW2geOX-tVhxCZh7zraP0_bB?usp=sharing",
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 space-y-12">
      {role === "admin" && (
        <div className="relative mb-4">
          <button
            className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-md shadow"
            onClick={() => setShowDropDown(!showDropDown)}
          >
            Upload Files
          </button>
          <p className="text-sm text-gray-600 mt-2">
            Note: You need to be signed in to your <strong>Google Drive</strong>{" "}
            account before starting the upload.
          </p>
          {showDropDown && (
            <div className="absolute top-10 left-0 bg-white border rounded-md shadow-lg z-10 w-64">
              <a
                href={folderLinks.project}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-gray-100"
                title="Click to open the folder. In Google Drive, click 'New' > 'File upload' to add your report."
                onClick={() => setShowDropDown(false)}
              >
                📁 Upload to Project Reports
              </a>
              <a
                href={folderLinks.caseStudy}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-gray-100"
                title="Click to open the folder. In Google Drive, click 'New' > 'File upload' to add your case study."
                onClick={() => setShowDropDown(false)}
              >
                📁 Upload to Case Studies
              </a>
            </div>
          )}
        </div>
      )}

      <Section title="Project Reports" data={dataProject} />
      <Section title="Case Studies" data={dataCaseStudy} />
    </div>
  );

}
