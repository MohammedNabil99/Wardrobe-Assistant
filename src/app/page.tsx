import React from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

const Page: React.FC = () => {
  return (
    <>
      {/* Google Analytics integration */}
      <GoogleAnalytics gaId="G-TF2BGJFVSP" />

      {/* Main page content */}
      <div style={styles.container}>
        <header style={styles.header}>
          <h1>Welcome to My Page</h1>
        </header>
        <main style={styles.main}>
          <p>This is a basic TypeScript React component.</p>

          <form id="uploadForm">
            <input type="file" id="imageInput" accept="image/*" />
            <select id="categorySelect">
              <option value="Shirt">Shirt</option>
              <option value="Pants">Pants</option>
              <option value="Jacket">Jacket</option>
              <option value="Accessory">Accessory</option>
            </select>
            <button type="submit">Upload</button>
          </form>
        </main>
        <footer style={styles.footer}>
          <p>© 2024 Your Name. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    backgroundColor: "#282c34",
    padding: "20px",
    color: "white",
    textAlign: "center" as const,
  },
  main: {
    flex: 1,
    padding: "20px",
  },
  footer: {
    backgroundColor: "#282c34",
    padding: "10px",
    color: "white",
    textAlign: "center" as const,
  },
};

export default Page;
