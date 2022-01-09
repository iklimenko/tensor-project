from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pydantic.utils import deep_update
import db_helper

class Student(BaseModel):
    id: int = None
    name: str
    university: str
    city: str
    course: int
    avatar: str
    phoneNumber: str
    mail: str
    description: str


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/students")
def students_list():
    sql = """
        select
            id,
            name,
            university,
            city,
            course,
            avatar,
            "phoneNumber",
            mail,
            description 
        from students
    """
    return db_helper.execute_query(sql)

@app.put("/students/{id}")
def update(id: int, payload: Student):
    sql = """
        update students
        set name = %s::text, 
        university = %s::text,
        city = %s::text,
        course = %s::int,
        avatar = %s::text,
        "phoneNumber" = %s::text,
        mail = %s::text,
        description = %s::text
        where id = %s::int
    """

    returned_sql = """
        select
            id,
            name,
            university,
            city,
            course,
            avatar,
            "phoneNumber",
            mail,
            description 
        from students
        where id = %s::int
    """

    db_helper.execute_query(
        sql,
        payload.name,
        payload.university,
        payload.city,
        payload.course,
        payload.avatar,
        payload.phoneNumber,
        payload.mail,
        payload.description,
        payload.id
    )
    return db_helper.execute_query(returned_sql, payload.id)

    print(id, payload)