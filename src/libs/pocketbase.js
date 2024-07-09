import PocketBase from "pocketbase";
export const pb = new PocketBase("http://127.0.0.1:8090");

const authData = await pb.admins.authWithPassword(
  "bmo@gmail.com",
  "bmo272202123"
);

pb.autoCancellation(false);
