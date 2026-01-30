import Link from "next/link";

const designs = [
  { href: "/designs/active-dashboard-light", label: "Active Dashboard Light", theme: "light", viewport: "desktop" },
  { href: "/designs/active-dashboard-light-mobile", label: "Active Dashboard Light Mobile", theme: "light", viewport: "mobile" },
  { href: "/designs/active-dashboard-dark-mobile", label: "Active Dashboard Dark Mobile", theme: "dark", viewport: "mobile" },
  { href: "/designs/new-monitor-start-light", label: "New Monitor Start Light", theme: "light", viewport: "desktop" },
  { href: "/designs/new-monitor-start-light-mobile", label: "New Monitor Start Light Mobile", theme: "light", viewport: "mobile" },
  { href: "/designs/new-monitor-start-light-mobile-preview", label: "New Monitor Start Light Mobile Preview", theme: "light", viewport: "mobile" },
  { href: "/designs/new-monitor-progress-light", label: "New Monitor Progress Light", theme: "light", viewport: "desktop" },
  { href: "/designs/new-monitor-progress-light-mobile", label: "New Monitor Progress Light Mobile", theme: "light", viewport: "mobile" },
  { href: "/designs/new-monitor-progress-light-mobile-preview", label: "New Monitor Progress Light Mobile Preview", theme: "light", viewport: "mobile" },
  { href: "/designs/new-monitor-start-dark", label: "New Monitor Start Dark", theme: "dark", viewport: "desktop" },
  { href: "/designs/new-monitor-progress-dark", label: "New Monitor Progress Dark", theme: "dark", viewport: "desktop" },
  { href: "/designs/new-monitor-start-dark-mobile", label: "New Monitor Start Dark Mobile", theme: "dark", viewport: "mobile" },
  { href: "/designs/new-monitor-progress-dark-mobile", label: "New Monitor Progress Dark Mobile", theme: "dark", viewport: "mobile" },
  { href: "/designs/new-monitor-start-dark-mobile-preview", label: "New Monitor Start Dark Mobile Preview", theme: "dark", viewport: "mobile" },
  { href: "/designs/new-monitor-progress-dark-mobile-preview", label: "New Monitor Progress Dark Mobile Preview", theme: "dark", viewport: "mobile" },
];

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-8 bg-[#f5f5f5ff] px-12 py-12">
      <div className="flex flex-col gap-2">
        <h1 className="font-['Inter'] text-[32px] font-[600] leading-[36px] tracking-tighter text-[#242424ff]">
          Ganymede Design Pages
        </h1>
        <p className="font-['Inter'] text-[16px] font-[400] leading-[24px] text-[#737373ff]">
          15 Subframe design pages — click to view
        </p>
      </div>
      <div className="flex w-full flex-col gap-6">
        {["light", "dark"].map((theme) => (
          <div key={theme} className="flex flex-col gap-3">
            <h2 className="font-['Inter'] text-[20px] font-[600] leading-[28px] text-[#242424ff] capitalize">
              {theme} Theme
            </h2>
            <div className="flex flex-wrap gap-3">
              {designs
                .filter((d) => d.theme === theme)
                .map((d) => (
                  <Link
                    key={d.href}
                    href={d.href}
                    className="flex items-center gap-2 rounded-lg border border-[#e0e0e0] bg-white px-4 py-3 font-['Inter'] text-[14px] font-[500] text-[#242424ff] hover:bg-[#f0f0ff] hover:border-[#5833ff] transition-colors"
                  >
                    <span className={`inline-block h-2 w-2 rounded-full ${d.viewport === "desktop" ? "bg-blue-500" : "bg-green-500"}`} />
                    {d.label}
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4 font-['Inter'] text-[12px] text-[#999]">
        <span className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded-full bg-blue-500" /> Desktop</span>
        <span className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded-full bg-green-500" /> Mobile</span>
      </div>
    </div>
  );
}
