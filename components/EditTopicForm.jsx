"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const EditTopicForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Topic could not updated");
      }
      if (res.ok) {
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Title"
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
        />
        <input
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Topic Description"
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
        />
        <button
          type="submit"
          className="bg-green-600 font-bold text-white py-3 px-3 w-fit"
        >
          Update Topic
        </button>
      </form>
    </>
  );
};

export default EditTopicForm;
