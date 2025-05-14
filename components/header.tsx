"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Mail } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const HEADER_OFFSET = 64; // px, adjust if your header height is different

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, selector: string) {
  const el = document.querySelector(selector);
  if (el) {
    e.preventDefault();
    const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

function scrollToBottom(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

export function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path
    }
    return pathname.startsWith(path)
  }

  // Function to handle navigation and scroll to top
  const handleNavigation = () => {
    window.scrollTo(0, 0)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center" onClick={handleNavigation}>
            <Image src="/logo.png" alt="ONE STOP SIGNATURE" width={180} height={50} priority />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/#" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      isActive("/") && pathname === "/" && "bg-orange-50 text-orange-600",
                    )}
                    onClick={handleNavigation}
                  >
                    HOME
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={isActive("/services") ? "bg-orange-50 text-orange-600" : ""}>
                  SERVICES
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-3 gap-3 p-4">
                    <div>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services/hard-fm"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50 hover:text-orange-600"
                          onClick={handleNavigation}
                        >
                          <div className="text-lg font-medium">Hard FM Services</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Technical and infrastructure maintenance services
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <div>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services/soft-fm"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50 hover:text-orange-600"
                          onClick={handleNavigation}
                        >
                          <div className="text-lg font-medium">Soft FM Services</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Cleaning, landscaping, and support services
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <div>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services/specialized"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50 hover:text-orange-600"
                          onClick={handleNavigation}
                        >
                          <div className="text-lg font-medium">Specialized Services</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Advanced solutions for specific facility needs
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <div className="col-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/#services"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50 hover:text-orange-600 bg-gray-50"
                        >
                          <div className="text-center text-sm font-medium">View All Services</div>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/#sectors" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle())} onClick={e => scrollToSection(e, '#sectors')}>SECTORS</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/#about" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle())} onClick={e => scrollToSection(e, '#about')}>ABOUT US</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/#contact" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle())} onClick={e => scrollToSection(e, '#contact')}>CONTACT</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/#"
                  className={cn("text-lg font-medium hover:text-orange-500", isActive("/") && "text-orange-500")}
                  onClick={handleNavigation}
                >
                  HOME
                </Link>
                <div>
                  <h3 className={cn("text-lg font-medium mb-2", isActive("/services") && "text-orange-500")}>
                    SERVICES
                  </h3>
                  <div className="pl-4 space-y-2">
                    <Link
                      href="/services/hard-fm"
                      className={cn(
                        "block text-sm hover:text-orange-500",
                        isActive("/services/hard-fm") && "text-orange-500",
                      )}
                      onClick={handleNavigation}
                    >
                      Hard FM Services
                    </Link>
                    <Link
                      href="/services/soft-fm"
                      className={cn(
                        "block text-sm hover:text-orange-500",
                        isActive("/services/soft-fm") && "text-orange-500",
                      )}
                      onClick={handleNavigation}
                    >
                      Soft FM Services
                    </Link>
                    <Link
                      href="/services/specialized"
                      className={cn(
                        "block text-sm hover:text-orange-500",
                        isActive("/services/specialized") && "text-orange-500",
                      )}
                      onClick={handleNavigation}
                    >
                      Specialized Services
                    </Link>
                    <Link href="/#services" className={cn("block text-sm hover:text-orange-500")}>
                      View All Services
                    </Link>
                  </div>
                </div>
                <Link href="/#sectors" className={cn("text-lg font-medium hover:text-orange-500")}
                  onClick={e => scrollToSection(e, '#sectors')}>
                  SECTORS
                </Link>
                <Link href="/#about" className={cn("text-lg font-medium hover:text-orange-500")}
                  onClick={e => scrollToSection(e, '#about')}>
                  ABOUT US
                </Link>
                <Link href="/#contact" className={cn("text-lg font-medium hover:text-orange-500")}
                  onClick={e => scrollToSection(e, '#contact')}>
                  CONTACT
                </Link>
                <div className="mt-4">
                  <Link href="/#contact">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white" onClick={scrollToBottom}>
                      <Mail className="mr-2 h-4 w-4" /> Contact Us
                    </Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
