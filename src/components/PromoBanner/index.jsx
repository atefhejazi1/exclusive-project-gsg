const Index = () => {
  return (
    <div className="bg-black text-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center py-2 gap-2 md:gap-0 ">
          {/* Center / Left content */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-center md:text-left m-auto">
            <p className="text-sm md:text-md">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </p>
            <button className="underline text-sm md:text-md">Shop Now</button>
          </div>

          {/* Right dropdown */}
          <div className="mt-2 md:mt-0 dropdown dropdown-end">
            <label className="btn m-1 text-sm md:text-md">English ▼</label>
          </div>
        </div>
      </div>
  );
};

export default Index;
