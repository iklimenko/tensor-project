from psycopg2 import connect, OperationalError, ProgrammingError
from psycopg2.extras import RealDictCursor
from typing import List
import const

def create_connection() -> connect:
    try:
        con = connect(
            database=const.DB_NAME,
            user=const.DB_USER,
            password=const.DB_PWD,
            host=const.DB_HOST,
            port=const.DB_PORT,
        )
        con.autocommit = True
    except OperationalError as e:
        con = None
        print(f"Error {e}")
    return con   

def execute_query(query: str, *args) -> List[dict]:
    con = create_connection() 
    if not con:
        return None 
    cursor = con.cursor(cursor_factory=RealDictCursor)
    try:
        cursor.execute(query, args)
        res = cursor.fetchall()
    except ProgrammingError as e:
        print(f"Error {e}")
        res = None
    except OperationalError as e:
        print(f"Error {e}")
        res = None
    finally:
        con.close()
    return res
