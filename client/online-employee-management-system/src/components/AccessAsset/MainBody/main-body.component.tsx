"use client";
import Section from "../Section/section.component";
import { useState, useEffect } from "react";
import { getUrl } from "@/constants/url";
import type { gDriveFolderDataType } from "@/constants/Types/response-data";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";


export default function MainBody(): JSX.Element {

  const {token} = useSelector((state: RootState) => state.authDetail);

  const [dataProject, setDataProject] = useState<gDriveFolderDataType[] | null>(null);
  const [dataCaseStudy, setDataCaseStudy] = useState<gDriveFolderDataType[] | null>(null);

  const fetchData = async (section: string, setter: (data: gDriveFolderDataType[]) => void) => {
    console.log(section);
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
  }

  useEffect(() => {
    fetchData("project", setDataProject);
    fetchData("caseStudy", setDataCaseStudy);
  }, []);

  return (
    <div className="">
      <Section title="Project" data={dataProject}/>
      <Section title="Case study" data={dataCaseStudy}/>
    </div>
  );
}
