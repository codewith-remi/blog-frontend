import{
  LuLayoutDashboard,
  LuGalleryVerticalEnd,
  LuMessageSquareQuote,
  LuLayoutTemplate,
  LuInfo,          
  LuMail
}from "react-icons/lu"

export const SIDE_MENU_DATA = [
  {
    id: "01",
    label: "Dashboard",
    icon: LuLayoutTemplate,
    path: "/admin/dashboard",
  },
  {
    id: "02",
    label: "Blog Posts",
    icon: LuGalleryVerticalEnd,
    path: "/admin/posts",
  },
  {
    id: "03",
    label: "Comments",
    icon: LuMessageSquareQuote,
    path: "/admin/comments",
  },
  {
    id: "04",
    label: "Go To Blog",
    icon: LuMessageSquareQuote,
    path: "/",
  },
]

export const BLOG_NAVBAR_DATA = [
  {
    id: "01",
    label: "Home",
    icon: LuLayoutTemplate,
    path: "/",
  },
  {
    id: "02",
    label: "About Us",
    icon: LuInfo,
    path: "/about",
  },
  {
    id: "03",
    label: "Contact",
    icon: LuMail,
    path: "/contact",
  },
]