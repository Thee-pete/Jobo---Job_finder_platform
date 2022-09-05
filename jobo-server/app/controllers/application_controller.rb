class ApplicationController < Sinatra::Base

  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    "Welcome to Jobo Api. Add /jobs, /companies, /categories paths to view API content"
  end
  get "/companies" do
    companies = Company.all
    companies.to_json
    
  end
  get "/categories" do
    categories = Category.all
    categories.to_json
    
  end
  get "/jobs" do
    jobs = Job.all
    jobs.to_json
    
  end


end
