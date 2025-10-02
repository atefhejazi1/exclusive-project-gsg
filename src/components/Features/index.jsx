import { features } from "./FeaturesList";

const Index = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, i) => (
          <div key={i} className="text-center space-y-4">
            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gray-300">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>

            <h2 className="text-2xl font-semibold">{feature.title}</h2>
            <p className="text-gray-500 text-md">{feature.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
