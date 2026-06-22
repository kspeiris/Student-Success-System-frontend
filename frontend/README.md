# Student Success Platform (SaaS)

## Project Overview

Student Success Platform is a cloud-native SaaS application designed to help university students manage and monitor their academic performance throughout their degree program.

The platform provides a centralized dashboard where students can track subjects, assignments, exams, GPA, academic goals, and overall progress. Instead of using multiple spreadsheets, notes, and calculators, students can manage everything from a single platform and gain insights into their academic performance through analytics and visualizations.

The goal is to create a modern SaaS product with a microservice-based architecture that can be deployed and operated in a production-grade cloud environment.

---

# Target Users

* University Students
* Undergraduate Students
* Academic Mentors
* Personal Academic Planning Users

---

# Core Features

## 1. User Authentication & Profile Management

Users should be able to:

* Register an account
* Login securely
* Update profile information
* Change password
* View personal academic profile

---

## 2. Semester Management

Students can:

* Create semesters
* Add semester details
* View current and previous semesters
* Manage academic records by semester

Example:

Semester 1
Semester 2
Semester 3
Semester 4

---

## 3. Subject Management

Students can:

* Add subjects/modules
* Define credit values
* Edit subject information
* Remove subjects

Example:

* Software Engineering
* Database Systems
* Computer Networks
* Machine Learning

---

## 4. Assignment & Assessment Tracking

Students can:

* Create assignments
* Add assignment deadlines
* Track completion status
* Store marks and grades

Assignment Status:

* Pending
* In Progress
* Completed
* Overdue

---

## 5. Exam Tracking

Students can:

* Add exams
* Store exam marks
* Track exam schedules
* View completed exams

---

## 6. GPA Management

Students can:

* Calculate semester GPA
* Calculate cumulative GPA
* View GPA history
* Monitor academic performance over time

---

## 7. GPA Prediction

Students can enter:

* Assignment marks
* Quiz marks
* Mid exam marks
* Expected final exam marks

The system predicts:

* Expected GPA
* Expected grade
* Performance outlook

---

## 8. Academic Goals

Students can:

* Set target GPA
* Set semester goals
* Track progress towards goals

Examples:

* Achieve GPA 3.8+
* Maintain Dean’s List
* Improve average grade

---

## 9. Analytics Dashboard

The dashboard should provide visual insights such as:

* GPA Trend by Semester
* Assignment Completion Rate
* Subject Performance Analysis
* Academic Progress Tracking
* Goal Achievement Progress

Use charts and graphs where appropriate.

---

## 10. Notification System

Students receive reminders for:

* Upcoming assignments
* Upcoming exams
* Missed deadlines
* Goal progress updates

---

# Suggested Architecture

Frontend:

* React

Backend:

* Spring Boot

Database:

* PostgreSQL

Cache (Optional):

* Redis

Microservices:

1. Auth Service
2. Academic Service
3. GPA Service
4. Notification Service

API communication should be REST-based.

---

# Non-Functional Requirements

* Responsive user interface
* JWT-based authentication
* RESTful API architecture
* Docker-ready services
* Environment variable configuration
* Microservice-friendly design
* Production-ready folder structure

---

# Project Goal

The primary objective is to build a realistic SaaS application with enough business functionality to demonstrate a production-grade software system while enabling deployment using modern cloud-native and DevOps practices.
