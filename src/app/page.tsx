import React from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import Link from 'next/link';


const Page: React.FC = () => {
  return (
    <>
      {/* Google Analytics integration */}
      <GoogleAnalytics gaId="G-TF2BGJFVSP" />

      {/* Main page content */}
      <div style={styles.container}>
        <header style={styles.header}>
          <h1>My Wardrobe</h1>
          <link rel="icon" href="/images/closet.png" type="image/png" />

        </header>

        <nav style={styles.sidebar}>
          <h2>Menu</h2>
          <ul>
          <li><Link href="#">Home</Link></li>
          <li><Link href="#">Inventory</Link></li>
            <li><a href="#">Outfit History</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </nav>

        <main style={styles.main}>
          <p style={styles.introText}>
            Simplify Your Style with Our Personal Wardrobe Assistant. <br></br>
            Discover fresh outfit combinations with ease! Our AI recommends ideal attire
            based on your current wardrobe and beyond.
          </p>
          <ol>
              <li>Upload images of your clothing items.</li>
              <li>
                Assign categories to each piece for streamlined organization.
              </li>
              <li>Click Upload Image to add as many items as you wish.</li>
              <li>
                Once your wardrobe is uploaded, select the options that best
                suit your needs to start your day feeling refreshed.
              </li>
              <li>
                Click Generate Attire and get your ideal outfit in seconds!
              </li>
            </ol>

          <form id="uploadForm" style={styles.form}>
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              style={styles.input}
            />
            <select id="categorySelect" style={styles.select}>
              <option value="Shirt">Shirt</option>
              <option value="Pants">Pants</option>
              <option value="Jacket">Jacket</option>
              <option value="Accessory">Accessory</option>
            </select>
            <button type="submit" style={styles.button}>
              Upload Image
            </button>
          </form>
        </main>
        <footer style={styles.footer}>
          <p>© 2024 Wardrobe Assistant</p>
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
  sidebar: {
    width: "20%",
    backgroundColor: "#fff",
    padding: "1rem",
    boxShadow: "0 0 5px rgba(0,0,0,0.1)",
  },
  content: {
    width: "80%",
    padding: "1rem",
  },
  card: {
    backgroundColor: "#fff",
    padding: "1rem",
    marginBottom: "1rem",
    boxShadow: "0 0 5px rgba(0,0,0,0.1)",
  },
  cardTitle: {
    fontSize: "1.2rem",
    margin: "0.5rem 0",
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
