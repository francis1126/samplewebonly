import { useState } from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { About } from "./About";
import { Departments } from "./Departments";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Agriculture } from "./departments/Agriculture";
import { Aviation } from "./departments/Aviation";
import { FinTech } from "./departments/FinTech";
import { Healthcare } from "./departments/Healthcare";
import { Marine } from "./departments/Marine";
import { Transportation } from "./departments/Transportation";
import { IT } from "./departments/IT";
import { Toaster } from "sonner";

export type Route = "/" | "/agriculture" | "/aviation" | "/fintech" | "/health" | "/marine" | "/transportation" | "/it";

export function Router() {
  const [currentRoute, setCurrentRoute] = useState<Route>("/");

  const navigate = (route: Route) => {
    setCurrentRoute(route);
    window.scrollTo(0, 0);
  };

  const navigateHome = () => navigate("/");

  // Home page content
  if (currentRoute === "/") {
    return (
      <div className="min-h-screen">
        <Header onNavigate={navigate} />
        <main>
          <Hero />
          <About />
          <Departments onNavigate={navigate} />
          <Contact />
        </main>
        <Footer />
        <Toaster position="top-right" richColors />
      </div>
    );
  }

  // Department pages
  switch (currentRoute) {
    case "/agriculture":
      return (
        <>
          <Agriculture onBack={navigateHome} />
          <Toaster position="top-right" richColors />
        </>
      );
    case "/aviation":
      return (
        <>
          <Aviation onBack={navigateHome} />
          <Toaster position="top-right" richColors />
        </>
      );
    case "/fintech":
      return (
        <>
          <FinTech onBack={navigateHome} />
          <Toaster position="top-right" richColors />
        </>
      );
    case "/health":
      return (
        <>
          <Healthcare onBack={navigateHome} />
          <Toaster position="top-right" richColors />
        </>
      );
    case "/marine":
      return (
        <>
          <Marine onBack={navigateHome} />
          <Toaster position="top-right" richColors />
        </>
      );
    case "/transportation":
      return (
        <>
          <Transportation onBack={navigateHome} />
          <Toaster position="top-right" richColors />
        </>
      );
    case "/it":
      return (
        <>
          <IT onBack={navigateHome} />
          <Toaster position="top-right" richColors />
        </>
      );
    default:
      return <div>Page not found</div>;
  }
}