import HeaderClient from "./HeaderClient";

async function getMenu() {
  try {
    const res = await fetch("http://127.0.0.1:3000/api/menu", {
      cache: "no-store",
    });
    return res.json();
  } catch {
    return [];
  }
}

export default async function Header() {
  const menu = await getMenu();

  return <HeaderClient menu={menu} />;
}