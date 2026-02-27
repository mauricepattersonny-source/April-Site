import { motion } from "motion/react";
import { 
  ShoppingBag, 
  Package, 
  MessageSquare, 
  ShieldCheck, 
  ClipboardList, 
  Calendar,
  ExternalLink,
  CheckCircle2,
  MapPin,
  Phone,
  Store
} from "lucide-react";

// --- Components ---

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.555 4.197 1.608 6.02L0 24l6.135-1.61a11.78 11.78 0 005.91 1.586h.005c6.634 0 12.048-5.414 12.048-12.05a11.77 11.77 0 00-3.489-8.522z"/>
  </svg>
);

export default function App() {
  const services = [
    {
      title: "Listing & Catalog Management",
      icon: <ShoppingBag className="w-6 h-6 text-brand" />,
      items: [
        "Create, optimize, and update listings (titles, bullets, descriptions, backend keywords)",
        "Upload via flat files, Seller Central, or eBay tools",
        "Fix suppressed listings and policy violations",
        "Create variations, bundles, A+ Content",
        "Catalog audits and listing hygiene maintenance"
      ]
    },
    {
      title: "Inventory & Order Management",
      icon: <Package className="w-6 h-6 text-brand" />,
      items: [
        "Monitor stock levels across platforms",
        "Manage FBA/FBM shipments & Walmart WFS",
        "Handle removals, reimbursements, RMAs",
        "Sync inventory across sales channels"
      ]
    },
    {
      title: "Customer Service & Reputation",
      icon: <MessageSquare className="w-6 h-6 text-brand" />,
      items: [
        "Respond to buyer messages across platforms",
        "Manage returns, claims, and A-to-Z cases",
        "Monitor feedback and reviews",
        "Maintain high seller performance metrics"
      ]
    },
    {
      title: "Account Health & Compliance",
      icon: <ShieldCheck className="w-6 h-6 text-brand" />,
      items: [
        "Monitor account health dashboards",
        "Assist with policy appeals (when delegated)",
        "Track key KPIs",
        "Follow up on lost/damaged inventory reimbursements"
      ]
    },
    {
      title: "Administrative Support",
      icon: <ClipboardList className="w-6 h-6 text-brand" />,
      items: [
        "Email and calendar management",
        "Spreadsheet organization & data entry",
        "Competitor monitoring",
        "Basic listing image edits"
      ]
    }
  ];

  const whyMe = [
    "6 Years of Platform Experience",
    "Multi-Channel Knowledge",
    "Detail-Oriented & Metrics-Driven",
    "Trained & Managed Other VAs",
    "Reliable Communication & Professional Standards"
  ];

  const logos = [
    { name: "amazon", type: "text" },
    { name: "Walmart", type: "text" },
    { name: "ebay", type: "text" },
    { name: "Marketplace", type: "text", icon: <Store className="w-5 h-5" /> },
    { name: "SellerAmp", type: "text" },
    { name: "Aura Repricer", type: "text" },
    { name: "AutoDS", type: "text" }
  ];

  return (
    <div className="min-h-screen selection:bg-brand selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center font-bold text-xl">
              AT
            </div>
            <span className="font-bold text-xl tracking-tighter">APRIL TURLA</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#about" className="hover:text-brand transition-colors">About</a>
            <a href="#services" className="hover:text-brand transition-colors">Services</a>
            <a href="#why-me" className="hover:text-brand transition-colors">Why Me</a>
            <a 
              href="https://wa.me/your-number" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:text-brand transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
            <a 
              href="#book" 
              className="bg-brand px-6 py-2.5 rounded-full text-white font-semibold hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-brand/20"
            >
              Book a Call
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand/5 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
              Available for New Projects
            </div>
            
            <h1 className="text-6xl md:text-8xl font-extrabold leading-[0.9] mb-4">
              April Turla
              <span className="block text-2xl md:text-3xl font-medium text-white/50 mt-2 tracking-normal font-mono">
                Virtual Assistant
              </span>
            </h1>
            
            <p className="text-xl text-white/70 max-w-xl mb-10 leading-relaxed">
              Helping <span className="text-brand font-semibold accent-glow">Amazon, Walmart and eBay</span> sellers streamline operations, protect account health, and increase profitability.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                "6+ Years of Ecommerce Experience",
                "Amazon, Walmart, eBay Expertise",
                "SKU-Level Profit & Loss Reporting",
                "Prep Center & Logistics Coordination"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                  {point}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#book" 
                className="inline-flex items-center gap-2 bg-brand px-8 py-4 rounded-full text-white font-bold text-lg hover:opacity-90 transition-all active:scale-95 shadow-xl shadow-brand/20"
              >
                <Calendar className="w-5 h-5" />
                Book a Call
              </a>
              <a 
                href="https://wa.me/your-number" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-8 py-4 rounded-full text-white font-bold text-lg hover:bg-white/10 transition-all active:scale-95"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 relative group">
              <img 
                src="https://imgur.com/xX4vXDB.jpg" 
                alt="April Turla" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand/20 blur-3xl rounded-full" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-brand/30 rounded-tl-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Logo Strip */}
      <section className="py-16 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[#8fa3b0] text-xs font-bold uppercase tracking-[0.4em] mb-12">
            Trusted Expertise Across Platforms & Tools
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-16">
            {logos.map((logo, i) => (
              <div key={i} className="flex items-center gap-2 text-[#8fa3b0] hover:text-white transition-colors cursor-default">
                {logo.icon && <span className="opacity-80">{logo.icon}</span>}
                <span className="text-xl md:text-2xl font-semibold tracking-tight">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-white/10">
              <img 
                src="https://imgur.com/ZLTHOHd.jpg" 
                alt="Ecommerce Operations" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Meet <span className="text-brand italic serif">April</span>
            </h2>
            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p>
                April Turla is a Philippines-based Ecommerce Virtual Assistant with 6 years of hands-on experience supporting Amazon sellers and multi-channel ecommerce businesses. She specializes in backend operations, listing optimization, inventory management, customer service, and financial reporting.
              </p>
              <p>
                She manages prep center communications for inbound and outbound FBA & WFS shipments and prepares SKU and platform-level Profit & Loss reports to help sellers identify their true margins.
              </p>
              <p>
                In addition to hands-on operational support, April has trained other virtual assistants to support ecommerce sellers efficiently and professionally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Core Services</h2>
            <p className="text-white/50 font-mono uppercase tracking-[0.3em] text-sm">Expertise that drives results</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl glass hover:bg-white/[0.08] transition-all duration-500 group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] max-w-md"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-colors duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
                <ul className="space-y-4">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-sm text-white/60 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand/40 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section id="why-me" className="py-24 px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-12 leading-tight">
                Why Work <br />
                <span className="text-brand">With Me?</span>
              </h2>
              <div className="space-y-8">
                {whyMe.map((point, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6 group"
                  >
                    <div className="text-4xl font-black text-white/10 group-hover:text-brand/20 transition-colors font-mono">
                      0{i + 1}
                    </div>
                    <div className="text-xl font-semibold tracking-tight">
                      {point}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square glass rounded-full flex items-center justify-center p-12 relative z-10">
                <div className="text-center">
                  <p className="text-sm font-mono uppercase tracking-widest text-brand mb-4">The Standard</p>
                  <p className="text-3xl font-bold leading-tight">
                    "Reliable, <br />
                    Data-Driven, <br />
                    Professional."
                  </p>
                </div>
              </div>
              {/* Decorative circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="book" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Let’s Optimize Your <br />
            <span className="text-brand">Ecommerce Operations</span>
          </h2>
          <p className="text-xl text-white/60 mb-12">
            Ready to scale your business? Book a discovery call or message me directly on WhatsApp to discuss how I can support your growth.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <a 
              href="https://wa.me/your-number" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-10 py-5 rounded-full text-white font-bold text-lg hover:bg-white/10 transition-all active:scale-95"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Message on WhatsApp
            </a>
          </div>
        </div>

        <div className="max-w-[1000px] mx-auto rounded-3xl overflow-hidden glass p-2 md:p-4 shadow-2xl shadow-brand/5">
          <div className="w-full bg-white/5 rounded-2xl overflow-hidden">
            <iframe 
              src="https://api.leadconnectorhq.com/widget/booking/74zJgbmt9scfX8XV3mon" 
              style={{ width: '100%', height: '800px', border: 'none' }} 
              scrolling="no" 
              id="NCzGV0yRvY0b4BmUTHtY_1771866330927"
              title="Booking Calendar"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center font-bold text-sm">
              AT
            </div>
            <span className="font-bold text-lg tracking-tighter uppercase">April Turla</span>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Philippines
            </div>
            <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand transition-colors">
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          <p className="text-xs text-white/30 font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} April Turla. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
