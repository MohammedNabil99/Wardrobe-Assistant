import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { createClient } from "@/supabase/server";

export async function POST(request: NextRequest) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user_id = user.id;
  //console.log(user.id);

  const supabase = createClient();

  const formData = await request.formData();
  //get file and name info
  const file = formData.get("file") as File;
  const imageName = formData.get("name") as string;

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  // Define the file path in the bucket
  const filePath = `uploads/${user_id}/${imageName}`;

  const { data, error } = await supabase.storage
    .from("images")
    .upload(filePath, file);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } else {
    return NextResponse.json(
      { message: "Successfully uploaded image" },
      { status: 200 }
    );
  }
}
