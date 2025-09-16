import mysql.connector
from mysql.connector import Error

class Database:
    def __init__(self, host, user, database, table):
        self.host = host
        self.user = user
        self.database = database
        self.table = table
        self.connection = None
        self.cursor = None

    def create_database_if_not_exists(self):
        try:
            temp_connection = mysql.connector.connect(
                host=self.host,
                user=self.user,
                password="",
            )
            temp_cursor = temp_connection.cursor()
            temp_cursor.execute(f"CREATE DATABASE IF NOT EXISTS {self.database}")
            temp_connection.close()
            print(f"{self.database} ready")
        except Error as e:
            print(f"Error: {e}")

    def connect(self):
        try:
            self.connection = mysql.connector.connect(
                host=self.host,
                user=self.user,
                password="",
                database=self.database
            )
            self.cursor = self.connection.cursor()
        except Error as e:
            print(f"Error: {e}")

    def create_table_if_not_exists(self):
        try:
            self.cursor.execute(f"""
                CREATE TABLE IF NOT EXISTS {self.table} (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(100) NOT NULL,
                    recurring_amount FLOAT,
                    invested_amount FLOAT,
                    total__amount FLOAT
                )
            """)
            self.connection.commit()
        except Error as e:
            print(f"Error: {e}")

    def close(self):
        if self.connection and self.connection.is_connected():
            self.cursor.close()
            self.connection.close()
