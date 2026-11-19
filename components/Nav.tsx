"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCopilotReadable } from "@copilotkit/react-core";
import { formData } from "@/app/data/formData";
import { supportData } from "@/app/data/supportData";
import { docketData } from "@/app/data/docketData";

function navLinkClass(pathname: string, href: string) {
  const active = pathname === href;
  return active ? "tc-nav-link tc-nav-link-active" : "tc-nav-link";
}

function WebReportMenu({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <li className="relative dropdown-container list-none">
      <button
        type="button"
        onClick={onToggle}
        className="tc-nav-cta"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Web Report
      </button>
      <div
        className={`tc-nav-menu animate-slide-down ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <a
          id="drop"
          href="https://treatment-court.clark.wa.gov/?id=1"
          className="tc-nav-menu-item"
        >
          DC/DOSA/FTC
        </a>
        <a
          href="https://treatment-court.clark.wa.gov/?id=2"
          className="tc-nav-menu-item"
        >
          Other
        </a>
      </div>
    </li>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useCopilotReadable({
    description: "Therapeutic Courts Forms and Documents",
    value: formData,
  });
  useCopilotReadable({
    description: "Support groups and resources",
    value: supportData,
  });
  useCopilotReadable({
    description: "Information on court dockets and zoom links",
    value: docketData,
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !(event.target as HTMLElement).closest(".dropdown-container")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const navItems = (
    <>
      <li className="list-none">
        <a id="link" href="/" className={navLinkClass(pathname, "/")}>
          Home
        </a>
      </li>
      <li className="list-none">
        <a
          id="link"
          href="/support"
          className={navLinkClass(pathname, "/support")}
        >
          Groups/Resources
        </a>
      </li>
      <li className="list-none">
        <a id="link" href="/forms" className={navLinkClass(pathname, "/forms")}>
          Forms
        </a>
      </li>
      <WebReportMenu isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
    </>
  );

  return (
    <nav className="tc-nav">
      <div className="tc-nav-inner">
        <a href="/" className="tc-nav-brand no-underline">
          TC Info
        </a>

        <ul className="tc-nav-links">{navItems}</ul>

        <div className="flex sm:hidden">
          <div className="group relative">
            <button
              type="button"
              className="tc-focus flex flex-col gap-1 rounded-panel border border-brand-100 bg-white p-2"
              aria-label="Open menu"
            >
              <span className="block h-0.5 w-7 rounded bg-ink" />
              <span className="block h-0.5 w-7 rounded bg-ink" />
              <span className="block h-0.5 w-7 rounded bg-ink" />
            </button>
            <div className="tc-nav-menu absolute right-0 hidden group-hover:block">
              <ul className="flex flex-col gap-1 p-1">{navItems}</ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}