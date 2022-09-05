puts "🌱 Seeding spices..."

# Seed your database here

apple = Company.create(company_name: "Apple inc.", company_desc: "Apple company deals in IT")

software_engineering = Category.create(category_name: "Software Engineering", category_desc: "Jobs available in IT")

software_engineer = Job.create(job_title: "Software Engineer", job_desc: "Work as a software engineer", how_to_apply: "Send your resume to apple@recruitment.inc", company_id:1, category_id:1)

puts "✅ Done seeding!"
