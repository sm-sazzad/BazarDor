import CategoryContent from "@/app/category/[categoryslug]/CategoryContent";

export default async function Page({
  params,
}: {
  params: Promise<{ categoryslug: string }>;
}) {
  const { categoryslug } = await params;

  return <CategoryContent categoryslug={categoryslug} />;
}
