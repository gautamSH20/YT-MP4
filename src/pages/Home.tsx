import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../utils/url";

export const Home = () => {
  const [getValue, setGetVlaue] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, seterr] = useState("");
  const handel = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    seterr("");

    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/download`,
        {
          url: getValue,
        },
        {
          responseType: "blob",
        }
      );
      const blob = new Blob([response.data], { type: "audio/mpeg" });
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.setAttribute("download", "download.mp3");
      document.body.appendChild(link);

      link.click();
      link.remove();
    } catch (e) {
      seterr("error has been found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center   h-[70vh] p-4 w-[60vh] rounded-md shadow-lg dark:bg-[#1e2939] dark:shadow-[#1e2949] shadow-gray-400 bg-white">
      <div className="flex items-center mb-10 dark:text-blue-600 text-black">
        <div className="text-4xl">Icon</div>
        <div>Main-heading</div>
      </div>
      <div className="mb-3 text-lg opacity-60 dark:text-white text-black">
        here you can put the the link of the to download the the music
      </div>
      <div className=" gap-6 h-full flex flex-col justify-center w-[50vh] items-center ">
        <input
          placeholder="put your link "
          className="  border-b-2 w-[50vh] dark:text-white text-black"
          value={getValue}
          onChange={(e) => {
            setGetVlaue(e.target.value);
          }}
        ></input>

        <button
          disabled={loading}
          onClick={handel}
          className="bg-blue-400 p-1 rounded-md w-[20vh]  hover:w-[30vh] hover:shadow-lg shadow-black ease-in duration-300 hover:text-lg"
        >
          {loading ? "Converting...." : "Convert"}
        </button>
      </div>
    </div>
  );
};
