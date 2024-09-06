import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { createClient } from "@/supabase/server";

export async function POST(request: NextRequest) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user_id = user.id; // Directly use user.id without UUID validation
  const supabase = createClient();

  const formData = await request.formData();
  // Get file and name info
  const file = formData.get("file") as File;
  const imageName = formData.get("name") as string;
  const category = formData.get("category") as string;

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  // Define the file path in the bucket
  const filePath = `uploads/${user_id}/${imageName}`;

  // Upload the file to the bucket
  const { data, error } = await supabase.storage
    .from("images")
    .upload(filePath, file);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Construct the image URL
  const imageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${filePath}`;

  // Insert the image details into the inventory table
  const { data: inventoryData, error: insertError } = await supabase
    .from("inventory")
    .insert({
      user_id: user_id, // Store as string
      name: imageName,
      image_url: imageUrl,
      category: category,
    });

  if (insertError) {
    return NextResponse.json({ error: insertError.message }, { status: 500 });
  }

  return NextResponse.json(
    { message: "Successfully uploaded image and added to inventory" },
    { status: 200 }
  );
}
