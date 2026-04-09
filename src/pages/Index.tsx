import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import DashboardSection from "@/components/DashboardSection";
import AlertsSection from "@/components/AlertsSection";
import UseCasesSection from "@/components/UseCasesSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <FeaturesSection />
    <ArchitectureSection />
    <DashboardSection />
    <AlertsSection />
    <UseCasesSection />
    <FooterSection />
  </div>
);

export default Index;
