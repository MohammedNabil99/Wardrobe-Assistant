import { NextRequest, NextResponse } from 'next/server';
import { currentUser } from "@clerk/nextjs/server";
import { createClient } from "@/supabase/server";

export async function POST(request: NextRequest) {

  const supabase = createClient();

  const formData = await request.formData();
  //get file and name info
  const file = formData.get('file') as File;
  const imageName = formData.get('name') as string;

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }

  // Define the file path in the bucket
  const filePath = `uploads/${imageName}`;

  const { data, error } = await supabase.storage.from('images').upload(filePath, file)
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } else {
    return NextResponse.json({ message: 'Successfully uploaded image to db' }, { status: 200 });
  }
  
}

  /* Once homepage & clerk is properly setup
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Return the user ID in the response
  return NextResponse.json({ user }, { status: 200 });
  */
