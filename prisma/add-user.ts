import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();
type UserInfo = {
  name: string;
  kind: string;
  phone: string;
  address: string;
  address2: string;
  description: string;
};
// export async function addUser(userInfo:UserInfo) {
export async function addUser(form: HTMLFormElement) {
  // ... you will write your Prisma Client queries here

  // console.log((form.current?.querySelector("input[name='name']") as HTMLInputElement).value)
  // console.log((form.current?.querySelector("input[name='kind']") as HTMLInputElement).value)
  // console.log((form.current?.querySelector("input[name='address']") as HTMLInputElement).value)
  // console.log((form.current?.querySelector("input[name='address2']") as HTMLInputElement).value)
  // console.log((form.current?.querySelector("input[name='phone']") as HTMLInputElement).value)
  // console.log((form.current?.querySelector("textarea[name='description']") as HTMLTextAreaElement).value)
  const user = await prisma.user
    .create({
      data: {
        name: (form.current?.querySelector("input[name='name']") as HTMLInputElement).value,
        kind: (form.current?.querySelector("input[name='kind']") as HTMLInputElement).value,
        phone: (form.current?.querySelector("input[name='phone']") as HTMLInputElement).value,
        address: (form.current?.querySelector("input[name='address']") as HTMLInputElement).value,
        address2: (form.current?.querySelector("input[name='address2']") as HTMLInputElement).value,
        description: (form.current?.querySelector("input[name='description']") as HTMLInputElement).value,
      },
    })
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
  console.log(user);
}
