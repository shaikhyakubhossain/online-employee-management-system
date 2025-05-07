"use client";
import { useState } from "react";
import Button from "@/components/Button/button.component";

export default function AddFile() {
  const [showDropDown, setShowDropDown] = useState(false);

  const folderLinks = {
    project:
      "https://drive.google.com/drive/folders/1Tje6o1_K3awW0NEWfGvw02cYgcl4zech?usp=sharing",
    caseStudy:
      "https://drive.google.com/drive/folders/1RxgeOZoYDW2geOX-tVhxCZh7zraP0_bB?usp=sharing",
  };

  return (
    <div className="relative mb-4">
          <Button
            onClick={() => setShowDropDown(!showDropDown)}
          >
            Upload Files
          </Button>
          {showDropDown && (
            <div className="absolute top-10 left-0 bg-white border rounded-md shadow-lg w-64">
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
  );
}
