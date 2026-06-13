import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { getCategory } from "@/lib/products-data";

const category = getCategory("custom-pc")!;

export const Route = createFileRoute("/products/custom-pc")({
  head: () => ({
    meta: [
      { title: `Custom PCs — ${category.title} | D.G Computers` },
      { name: "description", content: category.description },
      { property: "og:title", content: "Custom PCs — D.G Computers" },
      { property: "og:description", content: category.description },
      { property: "og:image", content: category.hero },
    ],
  }),
  component: () => <CategoryPage category={category} />,
});
