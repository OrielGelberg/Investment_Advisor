import mysql.connector
from mysql.connector import Error
import config

class Dal:
    def __init__(self):
        self.host = config.host
        self.user = config.user
        self.database = config.database
        self.table = config.table
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
                    password VARCHAR(100),
                    recurring_amount FLOAT,
                    invested_amount FLOAT,
                    total_amount FLOAT
                )
            """)
            self.connection.commit()
        except Error as e:
            print(f"Error: {e}")

    def close(self):
        if self.connection and self.connection.is_connected():
            self.cursor.close()
            self.connection.close()

    def create_user(self, name, password, amount):
        try:
            sql = "INSERT INTO users (name, password, recurring_amount, invested_amount, total_amount) VALUES (%s, %s, %s, 0, %s)"
            self.cursor.execute(sql, (name, password, amount, amount))
            self.connection.commit()
            print(f"Inserted user {name}")
        except Error as e:
            print(f"Error: {e}")


