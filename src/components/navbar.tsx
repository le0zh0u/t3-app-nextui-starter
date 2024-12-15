"use client";

import React from "react";

import {
  Button,
  Link,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Avatar,
} from "@nextui-org/react";
import {
  ChevronDownIcon,
  FaceIcon,
  GlobeIcon,
  OpenInNewWindowIcon,
  PersonIcon,
  TimerIcon,
} from "@radix-ui/react-icons";
import { signIn, signOut, useSession } from "next-auth/react";

import ThemeSwitcher from "@/components/home/theme-switcher";

export default function NavBar() {
  const { data: session, status } = useSession();
  const menuItems = ["docs", "features", "pricing", "blog"];

  const siteTitle = "ACM";

  return (
    <Navbar isBlurred maxWidth="xl">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarContent className="pr-3 sm:hidden" justify="center">
        <NavbarBrand>
          <Link
            href="/"
            className="text-lg font-light tracking-tighter text-inherit"
          >
            {siteTitle}
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-8 sm:flex" justify="center">
        <NavbarBrand>
          <Link
            href="/"
            className="flex items-center justify-center gap-3 text-2xl font-light tracking-tighter text-foreground"
          >
            {siteTitle}
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <Button as={Link} variant="light" size="sm" href="/#pricing">
            Pricing
          </Button>
        </NavbarItem>
        {/* <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button endContent={<ChevronDownIcon />} variant='light' size='sm'>
                Dropdown
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label='ACME features'
              className='w-[340px]'
              itemClasses={{
                base: 'gap-4'
              }}
            >
              <DropdownItem
                key='autoscaling'
                description='ACME scales apps to meet user demand, automagically, based on load.'
                startContent={<OpenInNewWindowIcon />}
              >
                Autoscaling
              </DropdownItem>
              <DropdownItem
                key='usage_metrics'
                description='Real-time metrics to debug issues. Slow query added? We’ll show you exactly where.'
                startContent={<PersonIcon />}
              >
                Usage Metrics
              </DropdownItem>
              <DropdownItem
                key='production_ready'
                description='ACME runs on ACME, join us and others serving requests at web scale.'
                startContent={<GlobeIcon />}
              >
                Production Ready
              </DropdownItem>
              <DropdownItem
                key='99_uptime'
                description='Applications stay on the grid with high availability and high uptime guarantees.'
                startContent={<TimerIcon />}
              >
                +99% Uptime
              </DropdownItem>
              <DropdownItem
                key='supreme_support'
                description='Overcome any challenge with a supporting team ready to respond.'
                startContent={<FaceIcon />}
              >
                +Supreme Support
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Button
            as={Link}
            color="primary"
            href="https://x.com/le0zh0u"
            variant="solid"
            className="hidden sm:flex"
            size="sm"
            target="_blank"
          >
            Connect on{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="none"
              viewBox="0 0 1200 1227"
            >
              <path
                fill="currentColor"
                d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
              />
            </svg>
          </Button>
        </NavbarItem>
        <NavbarItem>
          {status === "authenticated" ? (
            <div className="flex items-center gap-2">
              <Avatar
                size="sm"
                src={session.user?.image || ""}
                name={session.user?.name || ""}
              />

              <Dropdown>
                <DropdownTrigger>
                  <Button variant="light" size="sm">
                    {session.user?.name || "Profile"}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem key="profile">Profile</DropdownItem>
                  <DropdownItem key="settings">Settings</DropdownItem>
                  <DropdownItem key="signout" onPress={() => signOut()}>
                    Sign Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          ) : (
            <Button
              color="primary"
              variant="solid"
              size="sm"
              onClick={() => signIn()}
            >
              Sign In
            </Button>
          )}
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href="#" size="lg" color="foreground">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
