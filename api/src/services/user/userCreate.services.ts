import { createUser } from "../../interfaces/user";
import { AppDataSource } from "../../database";
import { User } from "../../entities/user.entity";
import bcrypt from "bcrypt"
import { Contact } from "../../entities/contact.entity";

export const userCreateServices = async ({name, email,phone,password}: createUser) => {

    const userRepository = AppDataSource.getRepository(User) 
    const contactRepository = AppDataSource.getRepository(Contact)

    const users = await userRepository.find()

    const alreadyExistsEmail = users.find((user) => user.email === email)
 
    if(alreadyExistsEmail){
      throw new Error("Email already exists")
    }

    const user = new User()
    user.id = user.id
    user.name = name
    user.email = email
    user.phone = phone
    user.password = bcrypt.hashSync(password,10)
    user.created_at = user.created_at
    

    const contact = new Contact()
    contact.id = contact.id
    contact.name = name
    contact.email = email
    contact.phone = phone
    contact.user = user

    await userRepository.save(user)
    await contactRepository.save(contact)

   const result = {
    id:user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    created_at: user.created_at
   }
   
 return result

}