import mysql.connector

try:
    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="Sia@123",
        database="ai_crm_hcp",
        port=3306
    )

    print("✅ MySQL Connected Successfully!")

    cursor = conn.cursor()
    cursor.execute("SELECT DATABASE();")

    print("Current Database:", cursor.fetchone())

    cursor.close()
    conn.close()

except Exception as e:
    print("❌ Error:", e)