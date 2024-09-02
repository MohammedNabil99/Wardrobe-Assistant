"use client";
import React, { useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import Link from "next/link";
import Head from "next/head"; // Import the Head component from Next.js

const Page: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Place head elements inside the Head component */}
      <Head>
        <title>My Wardrobe</title>
        <link rel="icon" href="/images/closet.png" type="image/png" />
      </Head>

      <GoogleAnalytics gaId="G-TF2BGJFVSP" />

      {/* Header should be consistently rendered */}
      <header className="header">
        <h1>My Wardrobe</h1>
        <button className="menu-button" onClick={toggleSidebar}>
          ☰
        </button>
      </header>

      {/* Sidebar navigation */}
      <nav className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-button" onClick={toggleSidebar}>
          x
        </button>
        <h2>Menu</h2>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/inventory">Inventory</Link>
          </li>
          <li>
            <Link href="#">Outfit History</Link>
          </li>
          <li>
            <Link href="/membership-plans">Membership Plans</Link>
          </li>
          <li>
            <Link href="#">Settings</Link>
          </li>
        </ul>
      </nav>

      {/* Main content */}
      <main className="main">
        <p className="intro-text">
          Simplify Your Style with Our Personal Wardrobe Assistant. <br />
          Discover fresh outfit combinations with ease! Our AI recommends ideal
          attire based on your current wardrobe and beyond.
        </p>
        <ol>
          <li>Upload images of your clothing items.</li>
          <li>Assign categories to each piece for streamlined organization.</li>
          <li>Click Upload Image to add as many items as you wish.</li>
          <li>
            Once your wardrobe is uploaded, select the options that best suit
            your needs to start your day feeling refreshed.
          </li>
          <li>Click Generate Attire and get your ideal outfit in seconds!</li>
        </ol>

        <form id="uploadForm" className="form">
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
    </>
  );
};

export default Page;
