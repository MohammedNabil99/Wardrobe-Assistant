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
          <p style={styles.introText}>This is a basic TypeScript React component.</p>

          <form id="uploadForm" style={styles.form}>
            <input type="file" id="imageInput" accept="image/*" style={styles.input} />
            <select id="categorySelect" style={styles.select}>
              <option value="Shirt">Shirt</option>
              <option value="Pants">Pants</option>
              <option value="Jacket">Jacket</option>
              <option value="Accessory">Accessory</option>
            </select>
            <button type="submit" style={styles.button}>Upload Image</button>
          </form>
        </main>
        <footer style={styles.footer}>
          <p>© 2024 Wardrobe AI</p>
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
    backgroundColor: "#f5f5f5",
    color: "#333",
  },
  header: {
    backgroundColor: "#3a3f50",
    padding: "20px",
    color: "white",
    textAlign: "center" as const,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  main: {
    flex: 1,
    padding: "20px",
    maxWidth: "800px",
    margin: "auto",
  },
  introText: {
    fontSize: "1.2em",
    marginBottom: "20px",
    color: "#555",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  input: {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "1em",
  },
  select: {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "1em",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    color: "white",
    fontSize: "1em",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  footer: {
    backgroundColor: "#3a3f50",
    padding: "10px",
    color: "white",
    textAlign: "center" as const,
    boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)",
  },
};

export default Page;
