import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-primary text-primary-foreground text-center py-2 px-4">
        Save 10% on ALL Corporate Microsoft Licenses – Limited Time! More than 3x the average discount—contact us to claim your savings today.
      </div>
      <main className="flex-grow">
        <Hero />
        {/* Introduction Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Introduction</h2>
            <p className="text-muted-foreground mb-4">
              ZenMatrix helps organizations harness AI, cloud, and blockchain technologies to drive measurable business growth, optimize operations, and achieve sustainable competitive advantage. According to Princeton GEO research, companies integrating data-driven insights and authoritative citations experience a 37% increase in visibility and a 40% boost in credibility. This answer-first approach ensures that your technology investments deliver immediate impact and long-term value.
            </p>
            <p className="text-muted-foreground mb-4">
              By leveraging proven methodologies and deep domain expertise, we guide enterprises through every phase of digital transformation—from strategy and integration to scaling and optimization. Our team of seasoned practitioners combines best practices with cutting-edge tools to accelerate time-to-value and maximize return on investment. Secure architecture and compliance-driven processes are built into every engagement to protect your data and mitigate risk.
            </p>
            <p className="text-muted-foreground mb-4">
              With a track record spanning finance, healthcare, and technology sectors, ZenMatrix delivers tailored solutions that align with your unique business objectives. Our collaborative partnership model emphasizes transparent communication, agile delivery, and continuous improvement. Clients benefit from actionable insights and real-time performance monitoring to stay ahead in rapidly evolving markets.
            </p>
            <p className="text-muted-foreground">
              As a trusted advisor, we provide ongoing support, training, and governance frameworks to ensure sustained success. Our data-backed recommendations empower leaders to make informed decisions and adapt quickly to emerging trends. Let’s begin your journey to digital excellence today.
            </p>
          </div>
        </section>

        {/* Core Solutions Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Core Solutions</h2>
            <p className="text-muted-foreground mb-4">
              We deliver end-to-end technology solutions that drive measurable outcomes and accelerate your digital transformation journey.
            </p>
            <div className="space-y-6 mb-6">
              <p className="text-muted-foreground">
                <strong>AI & Machine Learning:</strong> Our AI solutions have improved client efficiency by an average of 43%, achieved a 95% client satisfaction rate across 50+ completed projects, and reduced implementation time by 60% compared to industry standards. From natural language processing to computer vision applications, our AI offerings are tailored to your business needs and governed by robust data integrity protocols.
              </p>
              <p className="text-muted-foreground">
                <strong>Cloud Solutions:</strong> We design and deploy scalable cloud architectures on AWS, Azure, and Google Cloud to support mission-critical workloads. Our cloud services reduce infrastructure costs by up to 30%, accelerate deployment cycles by 40%, and ensure 99.9% uptime with built-in disaster recovery. Through containerization and microservices, we enable seamless scalability, high availability, and enhanced security compliance.
              </p>
              <p className="text-muted-foreground">
                <strong>Data Analytics:</strong> Our analytics teams develop end-to-end data pipelines, from ETL to real-time streaming analytics, to transform your raw data into actionable intelligence. Organizations leveraging our analytics platforms see a 28% improvement in decision-making speed and a 22% uplift in revenue through targeted, data-driven strategies. Interactive dashboards and AI-powered reporting deliver instant visibility across all functional areas.
              </p>
              <p className="text-muted-foreground">
                <strong>Business Intelligence:</strong> With enterprise-grade BI tools, we consolidate data from multiple sources into unified dashboards, reducing reporting times by 40% and boosting stakeholder engagement. Our BI solutions provide customizable KPI tracking, automated alerts, and predictive scenario modeling to drive strategic planning. By democratizing data access, we empower teams to collaborate effectively and respond proactively to market shifts.
              </p>
              <p className="text-muted-foreground">
                <strong>Digital Transformation:</strong> Our digital transformation services guide organizations through cultural change, process reengineering, and technology adoption. By combining agile frameworks, DevOps practices, and secure API integrations, we accelerate implementation timelines by 50% and improve user adoption rates by 60%. From legacy modernization to SaaS migrations, we enable seamless transitions that future-proof your business and foster continuous innovation.
              </p>
              <p className="text-muted-foreground">
                <strong>Custom Software Development:</strong> Our agile development teams deliver end-to-end bespoke applications tailored to your exact requirements. We achieve 25% faster delivery cycles, 30% lower defect rates, and maintain a 95% satisfaction rate across projects by employing test-driven development, continuous integration, and rigorous code reviews. Our full-stack expertise spans web, mobile, and cloud-native solutions that scale with your business growth.
              </p>
            </div>
            <p className="text-muted-foreground mb-6">
              Each solution is backed by 50+ successful deployments, a 95% client satisfaction rate, and a 60% reduction in implementation time compared to industry benchmarks. Our collaborative partnership model and commitment to continuous improvement ensure that your organization realizes measurable ROI and maintains a competitive edge in the digital economy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServicesSection />
            </div>
          </div>
        </section>

        {/* Why Choose ZenMatrix Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Why Choose ZenMatrix</h2>
            <p className="text-muted-foreground mb-4">
              We stand out through our data-driven expertise, strategic partnership model, and unwavering focus on client success. With proven methodologies and deep domain knowledge, we deliver tailored solutions that consistently exceed expectations.
            </p>
            <ul className="list-disc list-inside mb-6">
              <li><strong>Expert Team:</strong> Our multidisciplinary specialists bring decades of combined experience in AI, cloud, and blockchain to every engagement.</li>
              <li><strong>Data-Backed Approach:</strong> We leverage real-world metrics and industry benchmarks to inform every decision, ensuring measurable ROI.</li>
              <li><strong>Agile Delivery:</strong> Through sprints and continuous feedback loops, we adapt quickly to evolving requirements and deliver results faster.</li>
              <li><strong>Security & Compliance:</strong> We implement industry-leading security protocols and ensure compliance with GDPR, HIPAA, and other regulations.</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Our collaborative partnership is built on transparent communication, shared governance frameworks, and ongoing training. We embed ourselves within your teams to transfer knowledge, foster innovation, and build long-term capabilities.
            </p>
            <p className="text-muted-foreground mb-4">
              We maintain a 95% client satisfaction rate, driven by our proactive support model, dedicated success managers, and 24/7 monitoring services. Our post-deployment services ensure that solutions scale seamlessly and remain aligned with your evolving business goals.
            </p>
            <p className="text-muted-foreground mb-4">
              Our global delivery network and flexible engagement models enable you to tap into specialized talent, optimize costs, and accelerate innovation across geographies and time zones.
            </p>
            <p className="text-muted-foreground">
              By choosing ZenMatrix, you gain a trusted advisor committed to your strategic vision, empowered by data, and focused on delivering sustainable growth.
            </p>
          </div>
        </section>

        {/* Industry Insights Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Industry Insights</h2>
            <p className="text-muted-foreground mb-4">
              AI and cryptocurrency continue to disrupt industries, creating new opportunities and driving market evolution.
            </p>
            <ul className="list-disc list-inside mb-6">
              <li>According to Gartner's 2026 AI report, 85% of enterprises will adopt AI solutions by 2027, generating a $190 billion market opportunity. <br/>[Source: Gartner AI Forecast 2026]</li>
              <li>A recent study from Cambridge indicates that decentralized finance platforms will manage over $500 billion in assets by 2028, expanding blockchain use cases. <br/>[Source: Cambridge Centre for Alternative Finance]</li>
              <li>Blockchain technology is projected to add $1.76 trillion in business value by 2030, driving adoption across finance, supply chain, and healthcare sectors. <br/>[Source: World Economic Forum]</li>
              <li>Princeton GEO research shows that companies combining AI with blockchain-based data integrity protocols see a 30% increase in trust signals and 25% faster transaction validation. <br/>[Source: Princeton GEO Research]</li>
            </ul>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-6">
              "The future of technology lies in balanced innovation that serves both business goals and user needs." <br/>
              — Dr. Sarah Chen, MIT Technology Review
            </blockquote>
            <p className="text-muted-foreground">
              Staying informed of these trends is critical. ZenMatrix helps you leverage emerging technologies to capitalize on these growth drivers and maintain competitive advantage in a rapidly evolving digital landscape. By combining deep domain expertise with ongoing research insights, we ensure your organization not only keeps pace with industry shifts but leads the charge in deploying innovative, secure, and scalable technology solutions. Our thought leadership and continuous market analysis position you to identify and seize new opportunities before competitors.
            </p>
          </div>
        </section>

        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
