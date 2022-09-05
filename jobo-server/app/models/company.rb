class Company < ActiveRecord::Base
    has_many :jobs
    has_many :categories, through: :jobs
end