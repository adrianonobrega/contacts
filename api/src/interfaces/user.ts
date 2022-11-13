
export interface createUser{
    name: string 
    email: string
    phone: string
    password:string
    
}

export interface creUser extends createUser{
    id:string
    create_at:Date
    update_at:Date
}

export interface updateUser{
    id:string
    name:string
    email:string
    phone:string
    password:string
    
}

export interface userLogin{
    email:string
    password:string
}

export interface updateUser2{
    name:string
    email:string
    phone:string
    password:string
}