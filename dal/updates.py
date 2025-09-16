from dal import Dal
from mysql.connector import Error

class Updates:
    def __init__(self):
        self.dal = Dal()
        self.connection = self.dal.connection
        self.cursor = self.dal.cursor

    def update_field(self, user_id, field, new_value):
        try:
            sql = f"UPDATE users SET {field} = %s WHERE id = %s"
            self.cursor.execute(sql, (new_value, user_id))
            self.connection.commit()
        except Error as e:
            print(f"Error: {e}")

    def add_to_field(self, user_id, field, amount):
        try:
            sql = f"UPDATE users SET {field} = {field} + %s WHERE id = %s"
            self.cursor.execute(sql, (amount, user_id))
            self.connection.commit()
        except Error as e:
            print(f"Error: {e}")

    def subtract_from_field(self, user_id, field, amount):
        try:
            sql = f"UPDATE users SET {field} = {field} - %s WHERE id = %s"
            self.cursor.execute(sql, (amount, user_id))
            self.connection.commit()
        except Error as e:
            print(f"Error: {e}")

    def add_money_to_account(self, user_id, amount):
        self.add_to_field(user_id, 'recurring_amount', amount)
        self.add_to_field(user_id, 'total_amount', amount)

    def invest_money(self, user_id, amount):
        self.subtract_from_field(user_id, 'recurring_amount', amount)
        self.add_to_field(user_id, 'invested_amount', amount)

    def subtract_money_from_account(self, user_id, amount):
        self.subtract_from_field(user_id, 'recurring_amount', amount)
        self.subtract_from_field(user_id, 'total_amount', amount)
