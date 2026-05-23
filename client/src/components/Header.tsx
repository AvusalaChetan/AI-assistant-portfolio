type Prop = {
  isServerConnect: boolean;
};

const Header = ({isServerConnect}: Prop) => {
  return (
    <header className="bg-zinc-800 font-display shadow-2xl flex h-[72px] shrink-0 items-center justify-around ">
      <div className="left flex items-center justify-start gap-4 px-4 h-full w-[70%]">
        <div className="imgcontainer rounded-full w-10 h-10 bg-amber-700 flex items-center justify-center">
          {/* <img src="" className='w-full h-full' alt="" /> */}
          <p>AC</p>
        </div>

        <div>
          <h1 className="my-title capitalize tracking-wide">
            chetan's <span className="capitalize">AI assistant</span>
          </h1>
          <p className="text-muted text-sm">ask about my work</p>
        </div>
      </div>
      <div className="right pr-4 flex items-center gap-3">
        {/* <span
          className={`status ${isServerConnect ? "online" : "offline"}`}
          aria-hidden="true"
        />
        <span className="sr-only">
          {isServerConnect ? "online" : "offline"}
        </span> */}
      </div>
    </header>
  );
};

export default Header;
