import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Palette, 
  Brain, 
  Shield,
  Database,
  Cog,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const services = [
  { 
    icon: Code2, 
    title: "Web Development", 
    description: "Build powerful, scalable web applications with modern technologies. From e-commerce platforms to enterprise solutions.",
    features: ["React & Next.js", "Node.js & Python", "RESTful APIs", "Progressive Web Apps"]
  },
  { 
    icon: Smartphone, 
    title: "Mobile App Development", 
    description: "Create native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"]
  },
  { 
    icon: Cloud, 
    title: "Cloud Solutions", 
    description: "Leverage the power of cloud computing for scalability, reliability, and cost efficiency.",
    features: ["AWS & Azure", "Cloud Migration", "DevOps & CI/CD", "Serverless Architecture"]
  },
  { 
    icon: Palette, 
    title: "UI/UX Design", 
    description: "Design beautiful, intuitive interfaces that users love and that drive business results.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  },
  { 
    icon: Brain, 
    title: "AI & Machine Learning", 
    description: "Integrate intelligent automation and data-driven insights into your business processes.",
    features: ["Custom ML Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
  },
  { 
    icon: Shield, 
    title: "Cybersecurity", 
    description: "Protect your digital assets with comprehensive security solutions and best practices.",
    features: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response"]
  },
  { 
    icon: Database, 
    title: "Data Engineering", 
    description: "Build robust data pipelines and infrastructure to unlock the value of your data.",
    features: ["Data Warehousing", "ETL Pipelines", "Real-time Analytics", "Data Governance"]
  },
  { 
    icon: Cog, 
    title: "IT Consulting", 
    description: "Strategic technology guidance to align your IT investments with business objectives.",
    features: ["Digital Strategy", "Technology Roadmap", "Process Optimization", "Change Management"]
  },
];

const processSteps = [
  { step: "01", title: "Discovery", description: "We dive deep into your business goals, challenges, and requirements." },
  { step: "02", title: "Strategy", description: "Our experts craft a tailored technology roadmap for your success." },
  { step: "03", title: "Development", description: "Agile development with regular updates and collaborative feedback." },
  { step: "04", title: "Launch & Support", description: "Seamless deployment with ongoing optimization and support." },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 relative">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
                Our Services
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Comprehensive IT Solutions for{" "}
                <span className="gradient-text">Modern Businesses</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                From concept to deployment and beyond, we provide end-to-end technology 
                services that transform how businesses operate and grow.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <GlassCard className="h-full group" hover glow>
                  <div className="flex gap-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative">
          <AnimatedSection>
            <SectionHeading
              badge="Our Process"
              title="How We Bring Ideas to Life"
              description="A proven methodology that ensures successful project delivery every time."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {processSteps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div className="relative">
                  <span className="text-7xl font-heading font-bold text-primary/10 absolute -top-4 -left-2">
                    {step.step}
                  </span>
                  <div className="relative pt-8">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <GlassCard className="text-center p-12 md:p-16" glow>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                Contact us today to discuss your project requirements and discover 
                how we can help you achieve your technology goals.
              </p>
              <Button variant="gradient" size="xl" asChild>
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
