import { Switch, Route, Router as WouterRouter } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import Blogs from "@/pages/Blogs";
import Contact from "@/pages/Contact";
import FAQs from "@/pages/FAQs";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/projects" component={Projects} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/contact" component={Contact} />
      <Route path="/faqs" component={FAQs} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
      </WouterRouter>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
