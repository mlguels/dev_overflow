import React from "react";
import Image from "next/image";
import Link from "next/link";
import RenderTag from "./RenderTag";

const questions = [
  {
    _id: "1",
    title:
      "Would it be appropriate to point out an error in another paper during a referee report?",
  },
  {
    _id: "2",
    title: "How can an air conditioning machine exist?",
  },
  {
    _id: "3",
    title: "Interrogated evert time crossing UK Border as citizen?",
  },
  {
    _id: "4",
    title: "Low digit addition generator",
  },
  {
    _id: "5",
    title: "What is an example of 3 numbers that do not make up a vector?",
  },
];

const popularTags = [
  { _id: "1", name: "javascript", totalQuestions: 523 },
  { _id: "2", name: "python", totalQuestions: 51 },
  { _id: "3", name: "react", totalQuestions: 12 },
  { _id: "4", name: "nextjs", totalQuestions: 4 },
  { _id: "5", name: "typescript", totalQuestions: 512 },
];

const RightSidebar = () => {
  return (
    <section
      className="
      background-light900_dark200
      custom-scrollbar 
      light-border
      sticky
      right-0
      top-0
      flex
      h-screen
      w-[350px]
      flex-col
      overflow-y-auto
      border-l
      p-6
      pt-36
      shadow-light-300
      max-xl:hidden
      dark:shadow-none
     "
    >
      <div>
        <h3 className="h3-bold text-dark200_light900">Hot Network</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {questions.map((question) => {
            return (
              <Link
                key={question._id}
                href={`/questions/${question._id}`}
                className="flex cursor-pointer items-center justify-between gap-7"
              >
                <p className="text-dark500_light700 body-medium">
                  {question.title}
                </p>
                <Image
                  src="/assets/icons/chevron-right.svg"
                  alt="chevron right"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
