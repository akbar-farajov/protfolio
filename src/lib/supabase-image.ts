export function getPublicImageUrl(imagePath: string) {
  const baseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const bucket = process.env.NEXT_PUBLIC_SUPABASE_BUCKET!;

  return `${baseUrl}/storage/v1/object/public/${bucket}${imagePath}`;
}
