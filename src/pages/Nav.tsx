interface navInter {
  onclick?: () => void;
}

export const Nav = (prop: navInter) => {
  return (
    <div className=" flex shadow-md w-[110vh] p-3 rounded text-xl dark:text-blue-600 text-black dark:bg-[#1e2939] bg-white">
      IN-YT2MP4
      <button onClick={prop.onclick}>dark</button>
    </div>
  );
};
