import React from "react";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const router = useRouter();
  const showBookNow = router.pathname !== "/booking";

  return (
    <div>
      <Header />
      {children}
      {showBookNow && (
        <button
          className="book-now-floating"
          onClick={() => router.push("/booking")}
          type="button"
        >
          Book Now
        </button>
      )}
      <Footer />
    </div>
  );
};

export default Layout;
