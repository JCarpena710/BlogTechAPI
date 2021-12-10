//? Este config se encagargara de exportar mis variables
export const base_url = "/api";

export const port = process.env.PORT || 8080;

export const secret = process.env.SECRET || "secret";

const mongo = "mongodb+srv://root:rKEBE8UYI8AGIQxZ@cluster0.orx9c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

export const db_url = process.env.DB_URL || mongo;