import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Target, 
  Eye, 
  Heart, 
  Lightbulb, 
  Users, 
  Award,
  ArrowRight,
  Building2,
  Rocket,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const values = [
  { icon: Lightbulb, title: "Innovation", description: "We constantly push boundaries to deliver cutting-edge solutions" },
  { icon: Heart, title: "Integrity", description: "Transparency and honesty in every interaction and decision" },
  { icon: Users, title: "Collaboration", description: "Working together with clients as true partners in success" },
  { icon: Award, title: "Excellence", description: "Unwavering commitment to quality in everything we do" },
];

const milestones = [
  { year: "2014", title: "Founded", description: "NexaTech was born with a vision to transform businesses through technology" },
  { year: "2016", title: "First 50 Clients", description: "Reached our first major milestone with 50 satisfied clients" },
  { year: "2018", title: "Global Expansion", description: "Opened offices in Europe and Asia to serve international clients" },
  { year: "2020", title: "AI Division", description: "Launched dedicated AI and machine learning practice" },
  { year: "2022", title: "500+ Projects", description: "Celebrated delivering over 500 successful projects worldwide" },
  { year: "2024", title: "Industry Leader", description: "Recognized as a top IT services provider globally" },
];

const industries = [
  "Healthcare", "Finance", "E-commerce", "Education", "Manufacturing", "Real Estate", "Logistics", "Media"
];

const teamMembers = [
  { name: "Sarah Chen", role: "CEO & Founder", image: "SC" },
  { name: "Michael Torres", role: "CTO", image: "MT" },
  { name: "Emily Watson", role: "VP of Engineering", image: "EW" },
  { name: "David Kim", role: "Head of Design", image: "DK" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 relative">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
                About NexaTech
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Building the Future of{" "}
                <span className="gradient-text">Digital Innovation</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                We're a team of passionate technologists dedicated to helping businesses 
                thrive in the digital age through innovative solutions and strategic partnerships.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection direction="left">
              <GlassCard className="h-full" glow>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses with transformative technology solutions that drive growth, 
                  enhance efficiency, and create lasting competitive advantages. We believe every 
                  organization deserves access to world-class IT expertise.
                </p>
              </GlassCard>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <GlassCard className="h-full" glow>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                    <Eye className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted technology partner for businesses worldwide, known for 
                  our innovation, reliability, and the measurable impact we create for our clients. 
                  We envision a future where technology seamlessly enables human potential.
                </p>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative">
          <AnimatedSection>
            <SectionHeading
              badge="Our Values"
              title="The Principles That Guide Us"
              description="Our core values shape every decision we make and every solution we deliver."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <GlassCard className="text-center h-full" hover>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              badge="Our Journey"
              title="A Decade of Innovation"
              description="Key milestones that have shaped our growth and success."
            />
          </AnimatedSection>

          <div className="relative mt-16">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <AnimatedSection 
                  key={index} 
                  delay={index * 0.1}
                  direction={index % 2 === 0 ? "left" : "right"}
                >
                  <div className={`flex items-center gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                      <span className="text-primary font-heading font-bold text-lg">{milestone.year}</span>
                      <h3 className="font-heading text-xl font-semibold text-foreground mt-1 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                    <div className="hidden lg:flex w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 relative z-10" />
                    <div className="flex-1 hidden lg:block" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative">
          <AnimatedSection>
            <SectionHeading
              badge="Leadership"
              title="Meet Our Team"
              description="The experienced professionals driving innovation at NexaTech."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <GlassCard className="text-center" hover>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mx-auto mb-6 text-primary-foreground font-heading font-bold text-2xl">
                    {member.image}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {member.role}
                  </p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              badge="Industries"
              title="Expertise Across Sectors"
              description="We bring domain expertise to diverse industries worldwide."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {industries.map((industry, index) => (
                <span 
                  key={index} 
                  className="px-6 py-3 rounded-full bg-secondary/50 text-muted-foreground text-sm font-medium border border-border/50 hover:border-primary/50 hover:text-primary transition-all duration-300"
                >
                  {industry}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <GlassCard className="text-center p-12 md:p-16" glow>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Let's Build Something Great Together
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                Ready to transform your business? Join the 150+ companies that trust 
                NexaTech as their technology partner.
              </p>
              <Button variant="gradient" size="xl" asChild>
                <Link to="/contact">
                  Start a Conversation
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

export default About;
