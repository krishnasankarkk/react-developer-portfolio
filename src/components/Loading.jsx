import './Loading.css'

const Loading = () => {
    return (
      <div className="w-full h-[100vh] fixed top-0 bg-dark flex flex-row gap-1 items-center justify-center z-[9999]">
        <span className="loading w-8 h-8 bg-green rounded-full"></span>
        <span className="loading w-8 h-8 bg-green rounded-full"></span>
        <span className="loading w-8 h-8 bg-green rounded-full"></span>
      </div>
    );
  };
  
  export default Loading;