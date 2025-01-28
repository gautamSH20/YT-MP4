import { useEffect, useState } from "react";
import { fetch } from "../services/ApiResponse";

export const Home = () => {
  const [getValue, setGetVlaue] = useState("");
  const [id, setId] = useState("");
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchData = () => {
        let interval = setInterval(async function () {
          const res = await fetch(id);
          if (res.status === 200 && res.data.status === "ok") {
            setResponse(res.data);
          } else if (res.status === 200 && res.data.status === "flai") {
            alert("invalid video-id");
            clearInterval(interval);
          } else {
            clearInterval(interval);
            return console.log("error");
          }
        }, 1000);
      };
      fetchData();
    }
  }, [id]);

  useEffect(() => {
    if (response) {
      //@ts-ignore
      window.location.href = response.link;
    }
  }, [response]);

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
          onClick={() => {
            const text: string = getValue.split("=")[1];
            if (text) {
              setId(text);
            }
          }}
          className="bg-blue-400 p-1 rounded-md w-[20vh]  hover:w-[30vh] hover:shadow-lg shadow-black ease-in duration-300 hover:text-lg"
        >
          {" "}
          download
        </button>
      </div>
    </div>
  );
};
