import Box from "../components/box";

export default function Page() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center gap-20">
        <h1 className="text-4xl font-bold">
          St<span className="text-orange-500">ai</span>le Seeker
        </h1>
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-semibold">
            Your awesome AI-powered fashion assistant
          </h2>
          <p className="text-center max-w-sm">
            Have you experienced decision fatigue when choosing or don&apos;t
            have any ideas on what to wear?
          </p>
          <p className="text-center max-w-sm">
            Eliminate these possibilities with our product!
          </p>
        </div>
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
