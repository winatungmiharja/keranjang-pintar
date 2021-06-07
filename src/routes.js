import Dashboard from "views/Dashboard/Dashboard.js";
import Katalog from "views/Katalog/Katalog.js";
import Belanjaan from "views/Belanjaan/Belanjaan.js";
import Tentang from "views/Tentang.js";
import Pembayaran from "views/Pembayaran.js";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-tile-56",
    component: Dashboard,
    layout: "/admin",
    active : "danger",
  },
  {
    path: "/katalog",
    name: "Katalog",
    icon: "nc-icon nc-book-bookmark",
    component: Katalog,
    layout: "/admin",
    active : "success",
  },
  {
    path: "/belanjaan",
    name: "Belanjaan",
    icon: "nc-icon nc-basket",
    component: Belanjaan,
    layout: "/admin",
    active : "primary",
  },
  {
    path: "/pembayaran",
    name: "Pembayaran",
    icon: "nc-icon nc-credit-card",
    component: Pembayaran,
    layout: "/admin",
    active : "warning",
  },
  {
    pro: true,
    path: "/tentang",
    name: "Tentang Kami",
    icon: "nc-icon nc-alert-circle-i",
    component: Tentang,
    layout: "/admin",
    active : "info",
  },
];
export default routes;
