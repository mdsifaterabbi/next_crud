import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to  fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error in getTopics function in TopicsList component", error);
  }
};

const TopicsList = async () => {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((topic, index) => (
        <div className="flex p-4 border border-slate-300 my-3 justify-between gap-5 items-start">
          <div>
            <h2 className="font-bold text-2xl">{topic?.title}</h2>
            <div>{topic?.description}</div>
          </div>
          <div className="flex gap-2">
            <RemoveBtn id={topic?._id} />
            <Link href={`/editTopic/${topic?._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicsList;
