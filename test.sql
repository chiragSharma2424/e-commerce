CREATE DATABASE IF NOT EXISTS startersql;
use startersql;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    gender ENUM('Male', 'Female', 'Other'),
    date_of_birth DATE,
    salary DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO users (name, email, gender, date_of_birth, salary) VALUES
('Chirag Sharma', 'chirag.sharma1@example.com', 'Male', '1999-03-15', 45000.00),
('Anjali Mehta', 'anjali.mehta2@example.com', 'Female', '2001-08-10', 38000.50),
('Rahul Verma', 'rahul.verma3@example.com', 'Male', '1997-11-20', 52000.75),
('Sneha Kapoor', 'sneha.kapoor4@example.com', 'Female', '1998-05-05', 60000.00),
('Karan Patel', 'karan.patel5@example.com', 'Male', '2000-12-01', 47000.90),
('Ishita Roy', 'ishita.roy6@example.com', 'Female', '1996-06-25', 43000.60),
('Neha Yadav', 'neha.yadav7@example.com', 'Female', '2002-01-17', 36000.80),
('Aditya Singh', 'aditya.singh8@example.com', 'Male', '1995-09-03', 51000.00),
('Priya Desai', 'priya.desai9@example.com', 'Female', '1998-07-22', 49500.30),
('Vikas Joshi', 'vikas.joshi10@example.com', 'Male', '1997-10-30', 55000.20),
('Rohit Thakur', 'rohit.thakur11@example.com', 'Male', '1994-04-14', 48000.00),
('Divya Nair', 'divya.nair12@example.com', 'Female', '1999-02-09', 47000.40),
('Sanya Jain', 'sanya.jain13@example.com', 'Female', '2000-06-18', 40000.00),
('Aryan Bhatt', 'aryan.bhatt14@example.com', 'Male', '1996-08-08', 56000.10),
('Simran Kaur', 'simran.kaur15@example.com', 'Female', '1995-03-26', 39000.90),
('Tarun Malhotra', 'tarun.malhotra16@example.com', 'Male', '1993-12-30', 53000.00),
('Meera Shah', 'meera.shah17@example.com', 'Female', '1997-05-13', 45000.75),
('Amit Das', 'amit.das18@example.com', 'Male', '2001-01-11', 42000.60),
('Nisha Kumari', 'nisha.kumari19@example.com', 'Female', '1998-11-07', 39000.00),
('Ritesh Reddy', 'ritesh.reddy20@example.com', 'Male', '1995-09-27', 51000.45);

-- SELECT * FROM users WHERE gender!='Male';

-- SELECT * from users WHERE date_of_birth < '1995-09-09';

-- SELECT * FROM users WHERE id<10;

-- SELECT * FROM users WHERE date_of_birth IS NULL

-- SELECT * from users WHERE date_of_birth BETWEEN '1990-09-09' AND '1999-09-09';

SELECT * FROM users WHERE salary > 40000;