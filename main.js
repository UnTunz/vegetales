import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const nuevovegetales = await prisma.vegetales.create({
        data:{
            nombre: "Pepino",
            pais:"Peru",
            precio:"1000",
            cantidad:"120",
            tipovegetal:"vegetal",
             }
            })
    console.log("Nueva verdura creada: ",nuevovegetales);
    const todosvegetales = await prisma.vegetales.findMany();
    console.log("Todos los vegetales" );
    console.dir(todosvegetales, {depth: null });
}

main()
.catch((e) =>{
    console.error(e);
    process.exit(1);
})
.finally(async () => {
    await prisma.$disconnect();
});
