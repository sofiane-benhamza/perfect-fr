import Teachers from "@/components/root/Teachers";
import Features from "@/components/root/Features";
import Header from "@/components/root/Header";
import { useEffect } from "react";
import Courses from "@/components/root/Courses";
import WhyUse from "@/components/root/WhyUse";
import Contact from "@/components/root/Contact";
import Footer from "@/components/root/Footer";

export default function Home() {


  return (
    <>
      {/*header*/}
      <Header />
      {/* ***** Main Banner Area Start ***** */}
      <section className="section main-banner" id="top" data-section="section1">
        <video autoPlay={true} muted={false} loop={true} id="bg-video">
          <source src="/images/course-video.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay header-text">
          <div className="caption">
            <h6>Graduate School of Management</h6>
            <h2>
              <em>Your</em> Classroom
            </h2>
            <div className="main-button">
              <div className="scroll-to-section">
                <a href="#section2">Discover more</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Features />

      <WhyUse />

      <Courses />

      <Teachers />


      <Contact />

      <Footer />
      {/* Scripts */}
      {/* Bootstrap core JavaScript */}
    </>
  );
}
