import Box from "../components/box";

export default function Page() {
  return (
    <>
      <div className="h-screen flex flex-col justify-around items-center">
        <h1 className="text-4xl font-bold">
          St<span className="text-orange-500">ai</span>le Seeker
        </h1>
        <p className="text-lg text-center max-w-xl">
          Level up your drip, aura points, and unspoken rizz by leveraging the
          power of AI to help you reduce burnout in deciding what you want to
          wear and understand the current fashion trends.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-3 gap-12">
          <Box
            img="/wardrobe.png"
            title="Use our virtual wardrobe"
            description="Upload images of your clothing and organize them into virtual wardrobes for easy outfit planning."
          />
          <Box
            img="/attire.png"
            title="Generate the attire you want"
            description="Generate combinations of outfits based on your personal style, budget, weather, occasion, or your virtual wardrobe and save them for later."
          />
          <Box
            img="/people.png"
            title="Get recommendations"
            description="Receive personalized recommendations related to your style, the latest trends, or your wardrobe and find out where to buy them."
          />
        </div>
      </div>
    </>
  );
}
