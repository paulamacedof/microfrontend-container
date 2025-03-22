import { FaXmark } from "react-icons/fa6";
interface SidebarProps {
  isMobile?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
  pathname?: string;
}

export function Sidebar({
  isMobile = false,
  isOpen = false,
  onClose,
  pathname,
}: SidebarProps) {
  const links = [
    { href: "/", label: "Home" },
    { href: "/statement", label: "Extrato" },
    { href: "/investments", label: "Investimentos" },
    { href: "/other-services", label: "Outros Serviços" },
  ];

  const mobileClasses = isOpen ? "translate-x-0" : "-translate-x-full";

  return (
    <section
      className={`text-[#004D61] font-semibold ${
        isMobile
          ? `fixed top-0 left-0 bg-white h-[250px] w-[172px] shadow-lg pb-6 px-[11px] z-50 transform transition-transform p-2 flex flex-col ${mobileClasses}`
          : "hidden md:block bg-white max-h-[500px] rounded-lg p-6 md:p-4 md:col-span-2  lg:col-span-1 lg:p-6"
      }`}
    >
      <button
        onClick={onClose}
        className="text-gray-500 flex justify-end text-right z-10 transition hover:text-sky md:hidden"
      >
        <FaXmark color="#47A138" />
      </button>

      <nav>
        <ul className="flex flex-col  md:flex-row md:justify-between lg:block">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`link ${pathname === link.href ? "active" : ""} ${
                  ["/investments", "/other-services"].includes(link.href)
                    ? "disabled"
                    : ""
                }`}
                aria-current={pathname === link.href ? "page" : undefined}
                onClick={isMobile && onClose ? onClose : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
