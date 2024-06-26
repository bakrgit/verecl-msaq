import Header from "@/components/finance-dashboard/header.component";
import HeroSection from "@/components/finance-dashboard/hero-section.component";
import Footer from "@/components/finance-dashboard/footer.component";
import StatisticsSection from "@/components/finance-dashboard/statistics/statistics.component";
import CenteredMenu from "@/components/finance-dashboard/centered-menu.component";
import Features from "@/components/finance-dashboard/feature.component";
import WatchDemo from "@/components/finance-dashboard/watch-demo.component";
import Plans from "@/components/finance-dashboard/plans.component";
import Testimonials from "@/components/finance-dashboard/testimonials.component";

const FinanceDashboardPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <StatisticsSection />
      <CenteredMenu />
      <Features />
      <Testimonials />
      <Plans />
      <WatchDemo />
      <Footer />
    </>
  );
};

export default FinanceDashboardPage;
