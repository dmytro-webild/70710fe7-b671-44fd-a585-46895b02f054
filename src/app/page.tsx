"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { EyeOff, Globe, Lock, Shield, Star, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="mediumSizeLargeTitles"
        background="none"
        cardStyle="glass-depth"
        primaryButtonStyle="flat"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "MISSION",
          id: "mission",
        },
        {
          name: "LOADOUT",
          id: "loadout",
        },
        {
          name: "CONTACT HQ",
          id: "contact",
        },
      ]}
      brandName="BLACK OUT"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "gradient-bars",
      }}
      title="ENTER THE SHADOWS"
      description="BLACK OUT – NOT FOR EVERYONE. Built for the unseen. Stay in the shadows."
      kpis={[
        {
          value: "24/7",
          label: "DEPLOYMENT",
        },
        {
          value: "ELITE",
          label: "THREADS",
        },
        {
          value: "100%",
          label: "CONFIDENCE",
        },
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "DEPLOY NOW",
          href: "#loadout",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bde77U5MUYBDTRPXFWZy0thE4g/cinematic-shot-of-a-model-in-tactical-ur-1774823236509-f3e84e1d.png"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bde77U5MUYBDTRPXFWZy0thE4g/portrait-of-a-confident-urban-customer-d-1774823236485-ed284467.png",
          alt: "Operator 1",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bde77U5MUYBDTRPXFWZy0thE4g/confident-urban-customer-tactical-style--1774823236326-f2415bf3.png",
          alt: "Operator 2",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bde77U5MUYBDTRPXFWZy0thE4g/portrait-of-an-urban-youth-wearing-tacti-1774823236124-18c80765.png",
          alt: "Operator 3",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bde77U5MUYBDTRPXFWZy0thE4g/portrait-of-a-street-fashion-influencer--1774823236584-2634a016.png",
          alt: "Operator 4",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bde77U5MUYBDTRPXFWZy0thE4g/portrait-of-a-confident-urban-customer-d-1774823236485-ed284467.png",
          alt: "Operator 5",
        },
      ]}
      avatarText="10k+ Operators Active"
      marqueeItems={[
        {
          type: "text-icon",
          text: "TACTICAL GRIT",
          icon: Shield,
        },
        {
          type: "text-icon",
          text: "URBAN ELITE",
          icon: Zap,
        },
        {
          type: "text-icon",
          text: "MAX DURABILITY",
          icon: Lock,
        },
        {
          type: "text-icon",
          text: "STAY UNSEEN",
          icon: EyeOff,
        },
        {
          type: "text-icon",
          text: "GLOBAL DROP",
          icon: Globe,
        },
      ]}
    />
  </div>

  <div id="mission" data-section="mission">
      <AboutMetric
      useInvertedBackground={false}
      title="THE MISSION"
      metrics={[
        {
          icon: Shield,
          label: "DURABILITY",
          value: "MAX",
        },
        {
          icon: Zap,
          label: "PRECISION",
          value: "HIGH",
        },
        {
          icon: Star,
          label: "IDENTITY",
          value: "ELITE",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="loadout" data-section="loadout">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "SHADOW HOODIE V1",
          price: "$120.00",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bde77U5MUYBDTRPXFWZy0thE4g/premium-streetwear-hoodie-black-tactical-1774823236175-ddeb7004.png",
        },
        {
          id: "p2",
          name: "TACTICAL CARGO V2",
          price: "$145.00",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bde77U5MUYBDTRPXFWZy0thE4g/urban-technical-cargo-pants-charcoal-tac-1774823235841-1dcb34a7.png",
        },
        {
          id: "p3",
          name: "URBAN VEST RIG",
          price: "$95.00",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bde77U5MUYBDTRPXFWZy0thE4g/modern-urban-tactical-vest-black-streetw-1774823235609-7bdfc027.png",
        },
        {
          id: "p4",
          name: "PHANTOM TEE",
          price: "$55.00",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bde77U5MUYBDTRPXFWZy0thE4g/premium-streetwear-hoodie-black-tactical-1774823236175-ddeb7004.png",
        },
      ]}
      title="CURRENT LOADOUT"
      description="Engineered for maximum utility and aggressive aesthetics."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "ALEX R.",
          role: "OPERATOR",
          testimonial: "The build quality is insane. Feels like military grade.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bde77U5MUYBDTRPXFWZy0thE4g/portrait-of-a-confident-urban-customer-d-1774823236485-ed284467.png",
        },
        {
          id: "t2",
          name: "JASON K.",
          role: "FIELD TECH",
          testimonial: "Fits perfectly and looks aggressive. Best drop this year.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bde77U5MUYBDTRPXFWZy0thE4g/confident-urban-customer-tactical-style--1774823236326-f2415bf3.png",
        },
        {
          id: "t3",
          name: "SARAH V.",
          role: "TACTICAL STYLE",
          testimonial: "Not for everyone. This is exactly what I was looking for.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bde77U5MUYBDTRPXFWZy0thE4g/portrait-of-an-urban-youth-wearing-tacti-1774823236124-18c80765.png",
        },
        {
          id: "t4",
          name: "MARCUS L.",
          role: "URBAN EXPLORER",
          testimonial: "Stay in the shadows. The design language is untouchable.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bde77U5MUYBDTRPXFWZy0thE4g/portrait-of-a-street-fashion-influencer--1774823236584-2634a016.png",
        },
        {
          id: "t5",
          name: "ELENA D.",
          role: "NIGHT OPS",
          testimonial: "Unmatched durability for the urban landscape.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bde77U5MUYBDTRPXFWZy0thE4g/portrait-of-a-confident-urban-customer-d-1774823236485-ed284467.png",
        },
      ]}
      title="FIELD REPORTS"
      description="Operators wearing BLACK OUT across the globe."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars",
      }}
      tag="SECURE CHANNEL"
      title="CONTACT HQ"
      description="Join the inner circle. Stay updated on all future drops."
      mediaAnimation="slide-up"
      buttonText="ENLIST"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bde77U5MUYBDTRPXFWZy0thE4g/cinematic-shot-of-a-model-in-tactical-ur-1774823236509-f3e84e1d.png"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="BLACK OUT"
      leftLink={{
        text: "TERMS",
        href: "#",
      }}
      rightLink={{
        text: "PRIVACY",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
