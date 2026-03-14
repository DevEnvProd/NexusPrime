import { Twitter, Youtube, Disc, Send, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Social Icons */}
        <div className="flex justify-center gap-8 mb-12">
          {[Youtube, Twitter, Disc, Send, Instagram].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="text-white hover:text-[#F5009F] transition-colors transform hover:scale-110"
            >
              <Icon size={28} />
            </a>
          ))}
        </div>

        <p className="text-white mb-8">© Playlandverse all Rights Reserved 2026</p>

        {/* Links */}
        <div className="flex justify-center gap-8 mb-12 flex-wrap">
          {["Privacy Policy", "Terms And Conditions", "Data Deletion"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[#F5009F] font-bold uppercase tracking-wide hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto text-gray-500 text-xs leading-relaxed space-y-4">
          <p>
            Disclaimer. No Investment Advice. The information provided on this website does not constitute investment advice, 
            financial advice, trading advice, or any other sort of advice and you should not treat any of the website's content as such. 
            Playlandverse does not recommend that any cryptocurrency should be bought, sold, or held by you. 
            Do conduct your own due diligence and consult your financial advisor before making any investment decisions.
          </p>
          <p>
            You can view any revisions or modifications to the SAFT Agreement by downloading the latest version here.
            The SAFT Agreement is password protected, please request the password via email to hello@playlandverse.com
          </p>
          <p className="pt-4 text-gray-400">
            This site is owned an operated by Lumocolor Limited BVI
          </p>
        </div>
      </div>
    </footer>
  );
}
