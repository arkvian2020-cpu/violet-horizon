import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Palette, 
  Brain, 
  Shield,
  ArrowRight,
  CheckCircle2,
  Zap,
  Users,
  Award,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const services = [
  { icon: Code2, title: "Web Development", description: "Custom web applications built with cutting-edge technologies" },
  { icon: Smartphone, title: "Mobile Apps", description: "Native and cross-platform mobile solutions" },
  { icon: Cloud, title: "Cloud Solutions", description: "Scalable cloud infrastructure and migration services" },
  { icon: Palette, title: "UI/UX Design", description: "Beautiful, intuitive interfaces that users love" },
  { icon: Brain, title: "AI Solutions", description: "Intelligent automation and machine learning integration" },
  { icon: Shield, title: "IT Consulting", description: "Strategic technology guidance for your business" },
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "150+", label: "Happy Clients" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "10+", label: "Years Experience" },
];

const features = [
  { icon: Zap, title: "Fast Delivery", description: "Agile methodology ensures rapid project completion" },
  { icon: Users, title: "Expert Team", description: "Senior developers with 10+ years experience" },
  { icon: Award, title: "Quality First", description: "Rigorous testing and code review processes" },
  { icon: TrendingUp, title: "Scalable Solutions", description: "Built to grow with your business needs" },
];

const logos = [
  "TechCorp", "InnovateLabs", "DataFlow", "CloudNine", "DigitalFirst", "NextGen"
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] animate-glow-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/15 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-8">
                🚀 Trusted by 150+ Companies Worldwide
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
            >
              Transform Your Business with{" "}
              <span className="gradient-text">Cutting-Edge Technology</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              We deliver innovative IT solutions that drive growth, streamline operations, 
              and give your business the competitive edge it deserves.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="gradient" size="xl" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              badge="Our Services"
              title="Solutions That Drive Success"
              description="From web development to AI integration, we provide comprehensive IT services tailored to your unique business needs."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <GlassCard hover glow className="h-full group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <Link 
                    to="/services" 
                    className="inline-flex items-center gap-2 text-primary mt-4 text-sm font-medium group-hover:gap-3 transition-all"
                  >
                    Learn more <ArrowRight size={16} />
                  </Link>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <SectionHeading
                badge="Why Choose Us"
                title="Your Trusted Technology Partner"
                description="We combine technical expertise with business acumen to deliver solutions that not only work but drive real results."
                align="left"
              />

              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <GlassCard className="p-8" glow>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                  What Sets Us Apart
                </h3>
                <ul className="space-y-4">
                  {[
                    "Dedicated project managers for every engagement",
                    "24/7 support and maintenance services",
                    "Transparent pricing with no hidden costs",
                    "Agile methodology for faster delivery",
                    "Post-launch optimization and scaling support",
                    "Industry-specific expertise across sectors"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              badge="Technologies"
              title="Built with Modern Tech Stack"
              description="We leverage the latest technologies and frameworks to build robust, scalable, and future-proof solutions."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {["React", "Node.js", "Python", "AWS", "TypeScript", "PostgreSQL", "Docker", "Kubernetes", "TensorFlow", "Next.js", "GraphQL", "MongoDB"].map((tech, index) => (
                <span 
                  key={index} 
                  className="px-6 py-3 rounded-full bg-secondary/50 text-muted-foreground text-sm font-medium border border-border/50 hover:border-primary/50 hover:text-primary transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 border-y border-border/50">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <p className="text-center text-muted-foreground mb-10">
              Trusted by leading companies worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
              {logos.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-2xl font-heading font-bold text-muted-foreground/40 hover:text-primary/60 transition-colors duration-300"
                >
                  {logo}
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 relative">
          <AnimatedSection>
            <GlassCard className="max-w-4xl mx-auto text-center p-12 md:p-16" glow>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                Let's discuss how our technology solutions can help you achieve your business goals. 
                Get a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" size="xl" asChild>
                  <Link to="/contact">
                    Get Free Consultation
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/about">Learn About Us</Link>
                </Button>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
