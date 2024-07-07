"use server"
import fs from "fs/promises"
export const submitAction = async (e) =>{
    console.log(e.get("name"), e.get("add"))
    await fs.writeFile("Pavan.txt", `Name is ${e.get("name")} and i live in ${e.get("add")} that is a small town`)
}