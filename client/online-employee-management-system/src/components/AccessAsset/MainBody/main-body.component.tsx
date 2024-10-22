"use client";
import AddFile from "../AddFile/add-file.component";
import Section from "../Section/section.component";

export default function MainBody(): JSX.Element {
  return (
    <div className="">
      <AddFile />
      <Section title="Study Materials"/>
      <Section title="Interview Questions"/>
    </div>
  );
}
