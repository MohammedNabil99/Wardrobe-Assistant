// "use client";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { useState } from "react";
// import Image from "next/image";

// export default function UploadPage() {
//   const [image, setImage] = useState<File | null>(null);
//   const [imagePath, setImagePath] = useState("");
//   const queryCient = useQueryClient();

//   const mutation = useMutation({
//     mutationFn: (formData: FormData) =>
//       fetch("/api/upload", {
//         method: "POST",
//         body: formData,
//       }).then(
//         (res) => res.json() as Promise<{ message: string; error: string }>
//       ),
//     onSuccess: () => {
//       setImage(null);
//       setImagePath("");
//       const input = document.getElementById("imageInput") as HTMLInputElement;
//       input.value = "";
//       queryCient.invalidateQueries({ queryKey: ["inventory"] });
//     },
//   });

//   if (mutation.isError) {
//     return <div className="mt-20">{mutation.isError}</div>;
//   }

//   return (
//     <>
//       <main className="main">
//         <p
//           className="intro-text"
//           style={{ color: "yellow", textAlign: "center", marginTop: "40px" }}
//         >
//           Simplify Your Style with Our Personal Wardrobe Assistant. <br />
//           Discover fresh outfit combinations with ease! Our AI recommends ideal
//           attire based on your current wardrobe and beyond.
//         </p>
//         <ol style={{ marginTop: "10px" }}>
//           <li>Upload images of your clothing items.</li>
//           <li>Assign categories to each piece for streamlined organization.</li>
//           <li>Click Upload Image to add as many items as you wish.</li>
//           <li>
//             Once your wardrobe is uploaded, select the options that best suit
//             your needs to start your day feeling refreshed.
//           </li>
//           <li>Click Generate Attire and get your ideal outfit in seconds!</li>
//         </ol>
//         <form
//           id="uploadForm"
//           className="mt-10 flex flex-col gap-4"
//           onSubmit={(e) => {
//             e.preventDefault();

//             const formData = new FormData();
//             formData.append("file", image ? image : "");
//             formData.append("name", image ? image.name : "");

//             mutation.mutate(formData);
//           }}
//         >
//           <div className="flex flex-col gap-8">
//             <input
//               type="file"
//               id="imageInput"
//               accept="image/*"
//               className="border p-4 rounded-lg bg-gray-950"
//               onChange={(e) => {
//                 const file = e.target.files?.[0];

//                 if (file) {
//                   setImage(file);
//                   setImagePath(URL.createObjectURL(file));
//                 }
//               }}
//             />
//             {imagePath && (
//               <div className="relative">
//                 <button
//                   className="absolute -top-5 left-24"
//                   onClick={() => {
//                     setImage(null);
//                     setImagePath("");
//                     const input = document.getElementById(
//                       "imageInput"
//                     ) as HTMLInputElement;
//                     input.value = "";
//                   }}
//                 >
//                   <svg
//                     className="h-6 w-6 fill-white"
//                     clip-rule="evenodd"
//                     fill-rule="evenodd"
//                     stroke-linejoin="round"
//                     stroke-miterlimit="2"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 7.425 2.717-2.718c.146-.146.339-.219.531-.219.404 0 .75.325.75.75 0 .193-.073.384-.219.531l-2.717 2.717 2.727 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.53-.219l-2.729-2.728-2.728 2.728c-.146.146-.338.219-.53.219-.401 0-.751-.323-.751-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"
//                       fill-rule="nonzero"
//                     />
//                   </svg>
//                 </button>
//                 <Image
//                   src={imagePath}
//                   alt="Uploaded image"
//                   width={100}
//                   height={100}
//                 />
//               </div>
//             )}
//           </div>
//           <div className="flex flex-col gap-2">
//             <button
//               type="submit"
//               className="border p-2 rounded-lg bg-purple-800 hover:bg-purple-900 duration-200 flex flex-row justify-center"
//             >
//               {mutation.isPending ? (
//                 <svg
//                   className="animate-spin h-5 w-5 fill-white"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm8 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-19 0c0-6.065 4.935-11 11-11v2c-4.962 0-9 4.038-9 9 0 2.481 1.009 4.731 2.639 6.361l-1.414 1.414.015.014c-2-1.994-3.24-4.749-3.24-7.789z" />
//                 </svg>
//               ) : (
//                 "Upload"
//               )}
//             </button>
//             {mutation.data?.error && (
//               <p className="text-red-500 text-sm">{mutation.data.error}</p>
//             )}
//             {mutation.data?.message && (
//               <p className="text-green-500 text-sm">{mutation.data.message}</p>
//             )}
//           </div>
//         </form>
//       </main>
//       {/* Footer content */}
//     </>
//   );
// }

"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import Image from "next/image";

export default function UploadPage() {
  const [image, setImage] = useState<File | null>(null);
  const [imagePath, setImagePath] = useState("");
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (formData: FormData) =>
      fetch("/api/upload", {
        method: "POST",
        body: formData,
      }).then(
        (res) => res.json() as Promise<{ message: string; error: string }>
      ),
    onSuccess: () => {
      setImage(null);
      setImagePath("");
      setItemName("");
      setCategory("");
      const input = document.getElementById("imageInput") as HTMLInputElement;
      input.value = "";
      queryClient.invalidateQueries({ queryKey: ["inventory"] });
    },
  });

  if (mutation.isError) {
    return <div className="mt-20">{mutation.isError}</div>;
  }

  return (
    <>
      <main className="main">
        <p
          className="intro-text"
          style={{ color: "yellow", textAlign: "center", marginTop: "40px" }}
        >
          Simplify Your Style with Our Personal Wardrobe Assistant. <br />
          Discover fresh outfit combinations with ease! Our AI recommends ideal
          attire based on your current wardrobe and beyond.
        </p>
        <ol style={{ marginTop: "10px" }}>
          <li>Upload images of your clothing items.</li>
          <li>Assign categories to each piece for streamlined organization.</li>
          <li>Click Upload Image to add as many items as you wish.</li>
          <li>
            Once your wardrobe is uploaded, select the options that best suit
            your needs to start your day feeling refreshed.
          </li>
          <li>Click Generate Attire and get your ideal outfit in seconds!</li>
        </ol>
        <form
          id="uploadForm"
          className="mt-10 flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();

            if (!image || !itemName || !category) {
              alert("Please fill in all fields and select an image.");
              return;
            }

            const formData = new FormData();
            formData.append("file", image);
            formData.append("name", itemName);
            formData.append("category", category);

            mutation.mutate(formData);
          }}
        >
          <div className="flex flex-col gap-8">
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              className="border p-4 rounded-lg bg-gray-950"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setImage(file);
                  setImagePath(URL.createObjectURL(file));
                }
              }}
            />
            {imagePath && (
              <div className="relative">
                <button
                  className="absolute -top-5 left-24"
                  onClick={() => {
                    setImage(null);
                    setImagePath("");
                    const input = document.getElementById(
                      "imageInput"
                    ) as HTMLInputElement;
                    input.value = "";
                  }}
                >
                  <svg
                    className="h-6 w-6 fill-white"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 7.425 2.717-2.718c.146-.146.339-.219.531-.219.404 0 .75.325.75.75 0 .193-.073.384-.219.531l-2.717 2.717 2.727 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.53-.219l-2.729-2.728-2.728 2.728c-.146.146-.338.219-.53.219-.401 0-.751-.323-.751-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"
                      fill-rule="nonzero"
                    />
                  </svg>
                </button>
                <Image
                  src={imagePath}
                  alt="Uploaded image"
                  width={100}
                  height={100}
                />
              </div>
            )}

            {/* Name Input */}
            <input
              type="text"
              placeholder="Enter item name"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className="border p-4 rounded-lg bg-gray-950"
              required
            />

            {/* Category Dropdown */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border p-4 rounded-lg bg-gray-950"
              required
            >
              <option value="">Select category</option>
              <option value="Tops">Top</option>
              <option value="Bottoms">Bottom</option>
              <option value="Shoes">Shoes</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <button
              type="submit"
              className="border p-2 rounded-lg bg-purple-800 hover:bg-purple-900 duration-200 flex flex-row justify-center"
            >
              {mutation.isPending ? (
                <svg
                  className="animate-spin h-5 w-5 fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm8 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8.498 3.582 8.498 8-3.582 8.498-8.498 8.498zm-19 0c0-6.065 4.935-11 11-11v2c-4.962 0-9 4.038-9 9 0 2.481 1.009 4.731 2.639 6.361l-1.414 1.414.015.014c-2-1.994-3.24-4.749-3.24-7.789z" />
                </svg>
              ) : (
                "Upload"
              )}
            </button>
            {mutation.data?.error && (
              <p className="text-red-500 text-sm">{mutation.data.error}</p>
            )}
            {mutation.data?.message && (
              <p className="text-green-500 text-sm">{mutation.data.message}</p>
            )}
          </div>
        </form>
      </main>
    </>
  );
}
