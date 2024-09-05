// import { FC } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { createClient } from "@/supabase/server";
// import { currentUser } from "@clerk/nextjs/server";

// const InventoryPage: FC = async () => {
//   let user;

//   try {
//     user = await currentUser();
//   } catch (error) {
//     console.error("Error fetching user:", error);
//     return <div>Error fetching user</div>;
//   }

//   if (!user) {
//     // Handle unauthorized access
//     return <div>Unauthorized</div>;
//   }

//   const supabase = createClient();
//   const { data, error } = await supabase
//     .from("inventory")
//     .select("*")
//     .eq("user_id", user.id);

//   if (error) {
//     console.error("Error fetching inventory items:", error);
//     return <div>Error fetching inventory items</div>;
//   }

//   const items = data || [];

//   return (
//     <div className="px-8 pt-20">
//       <h1 className="text-2xl font-bold mb-6">Wardrobe Inventory</h1>
//       <Link
//         href="/"
//         className="inline-block mb-8 px-2 py-1 rounded-lg bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100 text-black font-bold hover:scale-110 duration-200"
//       >
//         Back to Home
//       </Link>
//       {items.length === 0 ? (
//         <div className="text-center text-gray-500 mt-8">
//           <p style={{ color: "white", fontSize: "40px" }}>
//             Upload items to see them on your inventory!
//           </p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {items.map((item) => (
//             <div
//               key={item.id}
//               className="border rounded-lg shadow-md overflow-hidden relative"
//             >
//               <div className="w-full h-48 relative">
//                 <Image
//                   src={item.image_url}
//                   alt={item.name}
//                   fill
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                   style={{ objectFit: "contain" }}
//                   className="rounded-t-md"
//                 />
//               </div>
//               <div className="p-2 text-white">
//                 <h2 className="text-lg font-semibold">{item.name}</h2>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default InventoryPage;

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/supabase/server";
import { currentUser } from "@clerk/nextjs/server";

const InventoryPage: FC = async () => {
  let user;

  try {
    user = await currentUser();
  } catch (error) {
    console.error("Error fetching user:", error);
    return <div>Error fetching user</div>;
  }

  if (!user) {
    // Handle unauthorized access
    return <div>Unauthorized</div>;
  }

  const supabase = createClient();
  const { data, error } = await supabase
    .from("inventory")
    .select("*")
    .eq("user_id", user.id);

  if (error) {
    console.error("Error fetching inventory items:", error);
    return <div>Error fetching inventory items</div>;
  }

  const items = data || [];

  return (
    <div className="px-8 pt-20">
      <h1 className="text-2xl font-bold mb-6">Wardrobe Inventory</h1>
      <Link
        href="/"
        className="inline-block mb-8 px-2 py-1 rounded-lg bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100 text-black font-bold hover:scale-110 duration-200"
      >
        Back to Home
      </Link>
      {items.length === 0 ? (
        <div className="text-center text-gray-500 mt-8">
          <p style={{ color: "white", fontSize: "40px" }}>
            Upload items to see them on your inventory!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg shadow-md overflow-hidden relative"
            >
              <div className="w-full h-48 relative">
                <Image
                  src={item.image_url}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "contain" }}
                  className="rounded-t-md"
                />
              </div>
              <div className="p-2 text-white">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-300">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InventoryPage;
