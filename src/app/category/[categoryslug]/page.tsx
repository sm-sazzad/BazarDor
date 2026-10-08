import CategoryContent from "@/app/product/[slug]/CategoryContent";

export default async function Page({
  params,
}: {
  params: Promise<{ categoryslug: string }>;
}) {
  const { categoryslug } = await params;

  return <CategoryContent categoryslug={categoryslug} />;
}
