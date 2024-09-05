// "use client";
// import { useState, useEffect } from "react";
// import { useUser } from "@clerk/nextjs";
// import Link from "next/link";

// interface InventoryItem {
//   id: number;
//   name: string;
//   category: string;
//   image_url: string;
// }

// const GeneratePage = () => {
//   const { user } = useUser();
//   const [inventory, setInventory] = useState<InventoryItem[]>([]);
//   const [outfit, setOutfit] = useState<string | null>(null);

//   useEffect(() => {
//     if (user) {
//       // Fetch inventory items
//       fetch("/api/inventory")
//         .then((response) => response.json())
//         .then((data) => setInventory(data.items))
//         .catch((error) => console.error("Error fetching inventory:", error));
//     }
//   }, [user]);

//   const generateOutfit = async () => {
//     const tops = inventory
//       .filter((item) => item.category === "Tops")
//       .map((item) => item.name);
//     const bottoms = inventory
//       .filter((item) => item.category === "Bottoms")
//       .map((item) => item.name);
//     const shoes = inventory
//       .filter((item) => item.category === "Shoes")
//       .map((item) => item.name);

//     if (!tops.length || !bottoms.length) {
//       alert("You need at least one top and one bottom in your inventory.");
//       return;
//     }

//     const response = await fetch("/api/generate-outfit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ tops, bottoms, shoes }),
//     });

//     const result = await response.json();
//     if (result.error) {
//       alert("Failed to generate outfit");
//     } else {
//       setOutfit(result.outfit);
//     }
//   };

//   return (
//     <div className="px-8 pt-20">
//       <h1 className="text-2xl font-bold mb-6">Generate Outfit</h1>
//       <Link
//         href="/"
//         className="inline-block mb-8 px-2 py-1 rounded-lg bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100 text-black font-bold hover:scale-110 duration-200"
//       >
//         Back to Home
//       </Link>

//       <button
//         onClick={generateOutfit}
//         className="px-4 py-2 bg-blue-500 text-white rounded-md"
//       >
//         Generate Outfit
//       </button>

//       {outfit && (
//         <div className="mt-8">
//           <h2 className="text-xl font-semibold">Suggested Outfit:</h2>
//           <p>{outfit}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GeneratePage;

// "use client";

// import { useState, useEffect } from "react";
// import { useUser } from "@clerk/nextjs";
// import Link from "next/link";

// interface InventoryItem {
//   id: number;
//   name: string;
//   category: string;
//   image_url: string;
// }

// const GeneratePage = () => {
//   const { user } = useUser();
//   const [inventory, setInventory] = useState<InventoryItem[]>([]);
//   const [outfit, setOutfit] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);

//   useEffect(() => {
//     if (user) {
//       setLoading(true);
//       fetch("/api/inventory")
//         .then((response) => response.json())
//         .then((data) => {
//           console.log("Fetched inventory:", data.items); // Debugging statement
//           setInventory(data.items);
//         })
//         .catch((error) => console.error("Error fetching inventory:", error))
//         .finally(() => setLoading(false));
//     }
//   }, [user]);

//   const generateOutfit = async () => {
//     const tops = inventory
//       .filter((item) => item.category === "Tops")
//       .map((item) => item.name);
//     const bottoms = inventory
//       .filter((item) => item.category === "Bottoms")
//       .map((item) => item.name);
//     const shoes = inventory
//       .filter((item) => item.category === "Shoes")
//       .map((item) => item.name);

//     console.log("Tops:", tops); // Debugging statement
//     console.log("Bottoms:", bottoms); // Debugging statement
//     console.log("Shoes:", shoes); // Debugging statement

//     if (!tops.length || !bottoms.length) {
//       alert("You need at least one top and one bottom in your inventory.");
//       return;
//     }

//     const response = await fetch("/api/generate-outfit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ tops, bottoms, shoes }),
//     });

//     const result = await response.json();
//     if (result.error) {
//       alert("Failed to generate outfit");
//     } else {
//       setOutfit(result.outfit);
//     }
//   };

//   return (
//     <div className="px-8 pt-20">
//       <h1 className="text-2xl font-bold mb-6">Generate Outfit</h1>
//       <Link
//         href="/"
//         className="inline-block mb-8 px-2 py-1 rounded-lg bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100 text-black font-bold hover:scale-110 duration-200"
//       >
//         Back to Home
//       </Link>

//       <button
//         onClick={generateOutfit}
//         className="px-4 py-2 bg-blue-500 text-white rounded-md"
//         disabled={loading} // Disable button while loading
//       >
//         {loading ? "Generating..." : "Generate Outfit"}
//       </button>

//       {outfit && (
//         <div className="mt-8">
//           <h2 className="text-xl font-semibold">Suggested Outfit:</h2>
//           <p>{outfit}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GeneratePage;

// "use client";

// import { useState, useEffect } from "react";
// import { useUser } from "@clerk/nextjs";
// import Link from "next/link";

// interface InventoryItem {
//   id: number;
//   name: string;
//   category: string;
//   image_url: string;
// }

// interface OutfitItem {
//   name: string;
//   category: string;
//   image_url: string;
// }

// const GeneratePage = () => {
//   const { user } = useUser();
//   const [inventory, setInventory] = useState<InventoryItem[]>([]);
//   const [outfit, setOutfit] = useState<OutfitItem[] | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);

//   useEffect(() => {
//     if (user) {
//       setLoading(true);
//       fetch("/api/inventory")
//         .then((response) => response.json())
//         .then((data) => {
//           console.log("Fetched inventory:", data.items); // Debugging statement
//           setInventory(data.items);
//         })
//         .catch((error) => console.error("Error fetching inventory:", error))
//         .finally(() => setLoading(false));
//     }
//   }, [user]);

//   const generateOutfit = async () => {
//     const tops = inventory
//       .filter((item) => item.category === "Tops")
//       .map((item) => item.name);
//     const bottoms = inventory
//       .filter((item) => item.category === "Bottoms")
//       .map((item) => item.name);
//     const shoes = inventory
//       .filter((item) => item.category === "Shoes")
//       .map((item) => item.name);

//     if (!tops.length || !bottoms.length) {
//       alert("You need at least one top and one bottom in your inventory.");
//       return;
//     }

//     try {
//       const response = await fetch("/api/generate-outfit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ tops, bottoms, shoes }),
//       });

//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(
//           `HTTP error! Status: ${response.status}, Details: ${errorText}`
//         );
//       }

//       const result = await response.json();
//       if (result.error) {
//         alert(result.error);
//       } else {
//         setOutfit(result.outfit);
//       }
//     } catch (error) {
//       console.error("Error generating outfit:", error);
//       alert("Failed to generate outfit. Check console for details.");
//     }
//   };

//   return (
//     <div className="px-8 pt-20">
//       <h1 className="text-2xl font-bold mb-6">Generate Outfit</h1>
//       <Link
//         href="/"
//         className="inline-block mb-8 px-2 py-1 rounded-lg bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100 text-black font-bold hover:scale-110 duration-200"
//       >
//         Back to Home
//       </Link>

//       <button
//         onClick={generateOutfit}
//         className="px-4 py-2 bg-blue-500 text-white rounded-md"
//         disabled={loading} // Disable button while loading
//       >
//         {loading ? "Generating..." : "Generate Outfit"}
//       </button>

//       {outfit && outfit.length > 0 && (
//         <div className="mt-8">
//           <h2 className="text-xl font-semibold">Suggested Outfit:</h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
//             {outfit.map((item, index) => (
//               <div
//                 key={index}
//                 className="border rounded-lg shadow-md overflow-hidden relative"
//               >
//                 <div className="w-full h-48 relative">
//                   <img
//                     src={item.image_url}
//                     alt={item.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="p-2 text-white bg-gray-800">
//                   <h3 className="text-lg font-semibold">{item.name}</h3>
//                   <p className="text-sm">{item.category}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GeneratePage;

"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

interface InventoryItem {
  id: number;
  name: string;
  category: string;
  image_url: string;
}

interface OutfitItem {
  name: string;
  category: string;
  image_url: string;
}

const GeneratePage = () => {
  const { user } = useUser();
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [outfit, setOutfit] = useState<OutfitItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (user) {
      setLoading(true);
      fetch("/api/inventory")
        .then((response) => response.json())
        .then((data) => {
          console.log("Fetched inventory:", data.items); // Debugging statement
          setInventory(data.items);
        })
        .catch((error) => console.error("Error fetching inventory:", error))
        .finally(() => setLoading(false));
    }
  }, [user]);

  const generateOutfit = async () => {
    setLoading(true); // Set loading to true when starting the request

    const tops = inventory
      .filter((item) => item.category === "Tops")
      .map((item) => item.name);
    const bottoms = inventory
      .filter((item) => item.category === "Bottoms")
      .map((item) => item.name);
    const shoes = inventory
      .filter((item) => item.category === "Shoes")
      .map((item) => item.name);

    if (!tops.length || !bottoms.length) {
      alert("You need at least one top and one bottom in your inventory.");
      setLoading(false); // Set loading to false when ending the request
      return;
    }

    try {
      const response = await fetch("/api/generate-outfit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tops, bottoms, shoes }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `HTTP error! Status: ${response.status}, Details: ${errorText}`
        );
      }

      const result = await response.json();
      if (result.error) {
        alert(result.error);
      } else {
        setOutfit(result.outfit);
        console.log("Generated outfit:", result.outfit); // Debugging statement
      }
    } catch (error) {
      console.error("Error generating outfit:", error);
      alert("Failed to generate outfit. Check console for details.");
    } finally {
      setLoading(false); // Always set loading to false when the request completes
    }
  };

  return (
    <div className="px-8 pt-20">
      <h1 className="text-2xl font-bold mb-6">Generate Outfit</h1>
      <Link
        href="/"
        className="inline-block mb-8 px-2 py-1 rounded-lg bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100 text-black font-bold hover:scale-110 duration-200"
      >
        Back to Home
      </Link>

      <button
        onClick={generateOutfit}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
        disabled={loading} // Disable button while loading
      >
        {loading ? "Generating..." : "Generate Outfit"}
      </button>

      {outfit && outfit.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Suggested Outfit:</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
            {outfit.map((item, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-md overflow-hidden relative"
              >
                <div className="w-full h-48 relative">
                  <img
                    src={item.image_url || "/path/to/placeholder-image.png"}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2 text-white bg-gray-800">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneratePage;
