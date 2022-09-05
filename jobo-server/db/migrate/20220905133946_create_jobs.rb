class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.string :job_title
      t.string :job_desc
      t.string :how_to_apply
      t.integer :company_id
      t.integer :category_id

    end
  end
end
