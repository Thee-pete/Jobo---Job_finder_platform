class ApplicationController < Sinatra::Base

  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    "Welcome to Jobo Api. Add /jobs, /companies, /categories paths to view API content"
  end
  get "/companies" do
    companies = Company.all
    companies.to_json(include: :categories)
    
  end
  get "/categories" do
    categories = Category.all
    categories.to_json
    
  end
  get "/jobs" do
    jobs = Job.all
    jobs.to_json
    
  end
  get "/companies/:id" do
    company = Company.find(params[:id])
    company.to_json
  end

  get "/categories/:id" do
    category = Category.find(params[:id])
    category.to_json
  end
  get "/jobs/:id" do
    job = Job.find(params[:id])
    job.to_json
  end
  post "/companies" do 
    company = Company.create(company_name: params[:company_name],
    company_desc: params[:company_desc])
    company.to_json
  end
  post "/categories" do 
    category = Category.create(category_name: params[:category_name],
    category_desc: params[:category_desc])
    category.to_json
  end
  post "/jobs" do 
    jobs = Job.create(job_title: params[:job_title ],
    job_desc: params[:job_desc], 
    how_to_apply: params[:how_to_apply], 
    company_id: params[:company_id], 
    category_id: params[category_id])
    category.to_json
  end


end
