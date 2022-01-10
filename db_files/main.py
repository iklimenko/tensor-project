from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import db_helper
import uvicorn
import const


class Student(BaseModel):
    id: int = None
    name: str
    university: str
    city: str
    course: int
    avatar: str
    phone: str
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
            phone,
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
        phone = %s::text,
        mail = %s::text,
        description = %s::text
        where id = %s::int
    """    

    db_helper.execute_query(
        sql,
        payload.name or '',
        payload.university or '',
        payload.city or '',
        payload.course or 1,
        payload.avatar or '',
        payload.phone or '',
        payload.mail or '',
        payload.description or '',
        payload.id
    )

    returned_sql = """
        select
            id,
            name,
            university,
            city,
            course,
            avatar,
            phone,
            mail,
            description
        from students
        where id = %s::int
    """

    return db_helper.execute_query(returned_sql, payload.id)


@app.post('/students')
def create(payload: Student):
    sql = """
        insert into students (name, university, city, course, avatar, phone, mail, description)
        values (%s::text, %s::text, %s::text, %s::int, %s::text, %s::text, %s::text, %s::text)
    """  
    db_helper.execute_query(
        sql,
        payload.name,
        payload.university,
        payload.city,
        payload.course,
        payload.avatar,
        payload.phone,
        payload.mail,
        payload.description
    )

    # returned_sql = """
    #     select
    #         id,
    #         name,
    #         university,
    #         city,
    #         course,
    #         avatar,
    #         phone,
    #         mail,
    #         description
    #     from students
    #     order by id desc limit 1 
    # """
    # return db_helper.execute_query(returned_sql)

@app.delete("/students/{id}")
def delete(id: int):
    sql = """
        delete from students
        where id = %s::int
    """    

    db_helper.execute_query(sql, id)

if __name__ == '__main__':
    uvicorn.run(app, host=const.APP_IP, port=const.APP_PORT)