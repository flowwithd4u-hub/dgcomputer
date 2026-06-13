import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { getCategory } from "@/lib/products-data";

const category = getCategory("accessories")!;

export const Route = createFileRoute("/products/accessories")({
  head: () => ({
    meta: [
      { title: `Accessories — ${category.title} | D.G Computers` },
      { name: "description", content: category.description },
      { property: "og:title", content: "Accessories — D.G Computers" },
      { property: "og:description", content: category.description },
      { property: "og:image", content: category.hero },
    ],
  }),
  component: () => <CategoryPage category={category} />,
});
