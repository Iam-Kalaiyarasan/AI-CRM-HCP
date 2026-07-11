import mysql.connector


def get_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="Sia@123",
        database="ai_crm_hcp"
    )