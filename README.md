Role base admin panal
Admin Panel Roles:
Super Admin: Access to manage employees, products, and sales.
Employees: Operators (manage orders), Packers (manage packing/shipping).
Tables:
Employees:
Columns: Name, Email, Phones, Employee Type (Operator, Packing)
Product Categories:
Columns: Name, Description, Weight, Price, Tag
Sales:
Columns: Customer Name, Product Name, FB ID, Weight, Quantity, Invoice (with print  edit and download options)
Customer Table:
Columns: Customer Name, Product Name, FB ID, Weight, Quantity,Address
Messenger API need more specific Requirement  to give better eta:
Integration with Facebook Messenger for customer communication (GET, POST).
Integration with WhatsApp API via Twilio Paid (GET, POST).
Technology Stack:
Frontend: React.js for the user interface (Admin panel, employee panel).
Backend: Node.js (Express.js or similar for RESTful APIs).
Database: optional(MongoDB (for ease of scaling with document-based data like sales, customers).SQl)
WhatsApp Integration: Twilio API (to send and receive WhatsApp messages).
Facebook Integration: Facebook Messenger API for communication.
Technologies to Use:
Frontend:
React.js: For building the dynamic, responsive user interface.
Material UI or Ant Design: For pre-built UI components (tables, buttons, etc.).
Backend:
Node.js with Express.js: For building RESTful APIs to interact with the database.
MongoDB: A NoSQL database to store employee, product, sales, and customer data.
JWT (JSON Web Tokens): For authentication and authorization (Super Admin, Employees).
Messenger Integration:
Facebook Messenger API: To send and receive messages from customers via Facebook Messenger.
Twilio API: For WhatsApp messaging functionality.
Invoice and Sales Management:
PDF Generation: Use libraries like pdfkit or puppeteer to generate and download invoices.
