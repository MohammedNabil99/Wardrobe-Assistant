// "use client";
// import React, { useState } from "react";
// import { GoogleAnalytics } from "@next/third-parties/google";
// import Link from "next/link";
// import Head from "next/head"; // Import the Head component from Next.js

// const Page: React.FC = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <>
//       {/* Main content */}
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

//         <form id="uploadForm" className="form" style={{ marginTop: "20px" }}>
//           <input type="file" id="imageInput" accept="image/*" />
//           <select id="categorySelect">
//             <option value="Shirt">Shirt</option>
//             <option value="Pants">Pants</option>
//             <option value="Jacket">Jacket</option>
//             <option value="Accessory">Accessory</option>
//           </select>
//           <button type="submit">Upload Image</button>
//         </form>
//       </main>
//       {/* Footer content */}
//       <footer className="footer">
//         <p>© 2024 Wardrobe Assistant</p>
//       </footer>
//     </>
//   );
// };

// export default Page;

"use client";
import React, { useState } from "react";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

const Page: React.FC = () => {
  return (
    <>
      <SignedIn>
        <main className="main">
          <p
            className="intro-text"
            style={{ color: "yellow", textAlign: "center", marginTop: "40px" }}
          >
            Simplify Your Style with Our Personal Wardrobe Assistant. <br />
            Discover fresh outfit combinations with ease! Our AI recommends
            ideal attire based on your current wardrobe and beyond.
          </p>
          <ol style={{ marginTop: "10px" }}>
            <li>Upload images of your clothing items.</li>
            <li>
              Assign categories to each piece for streamlined organization.
            </li>
            <li>Click Upload Image to add as many items as you wish.</li>
            <li>
              Once your wardrobe is uploaded, select the options that best suit
              your needs to start your day feeling refreshed.
            </li>
            <li>Click Generate Attire and get your ideal outfit in seconds!</li>
          </ol>

          <form id="uploadForm" className="form" style={{ marginTop: "20px" }}>
            <input type="file" id="imageInput" accept="image/*" />
            <select id="categorySelect">
              <option value="Shirt">Shirt</option>
              <option value="Pants">Pants</option>
              <option value="Jacket">Jacket</option>
              <option value="Accessory">Accessory</option>
            </select>
            <button type="submit">Upload Image</button>
          </form>
        </main>
        {/* Footer content */}
        <footer className="footer">
          <p>© 2024 Wardrobe Assistant</p>
        </footer>
      </SignedIn>

      {/* Redirect to sign-in if not authenticated */}
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default Page;
