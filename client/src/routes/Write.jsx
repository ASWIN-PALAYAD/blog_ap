import { useAuth, useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState("");
  const { getToken } = useAuth();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();

      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess:(res)=>{
      toast.success('Post has been created..')
      navigate(`/${res.data.slug}`)
    }
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (isLoaded && !isSignedIn) {
    return <div>You should login</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      content: value,
    };
    console.log(data);
    mutation.mutate(data);
  };

  return (
    <div className="h-[calc(100vh-64px] md:h-[calc(100vh-80px)] flex flex-col gap-6 ">
      <h1 className=" text-xl font-light">Create a New Post</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 flex-1 mb-6"
        action=""
      >
        <button className="p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white w-max">
          Add a cover image
        </button>
        <input
          className="text-4xl font-semibold bg-transparent outline-none"
          type="text"
          placeholder="Blog title here..."
          name="title"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm ">
            Choose a category:
          </label>
          <select
            name="category"
            id=""
            className="p-2 rounded-xl bg-white shadow-md"
          >
            <option value={"general"}>General</option>
            <option value={"Web Design"}>Web Design</option>
            <option value={"Development"}>Development</option>
            <option value={"Databases"}>Databases</option>
            <option value={"Search Engines"}>Search Engines</option>
            <option value={"Databases"}>Databases</option>
            <option value={"Marketing"}>Marketing</option>
          </select>
        </div>
        <textarea
          className="p-4 rounded-xl bg-white shadow-md"
          name="desc"
          placeholder="A Short Description"
        />
        <ReactQuill
          theme="snow"
          className="flex-1 rounded-xl bg-white shadow-md"
          value={value}
          onChange={setValue}
        />
        <button
          disabled={mutation.isPending}
          className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Loading..." : "Send"}
        </button>
        {mutation.isError &&  <span>{mutation.error.message}</span>}
      </form>
    </div>
  );
};

export default Write;
