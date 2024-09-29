class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class

  def json
    "#{self.class.name}Serializer".safe_constantize&.new(self)&.serializable_hash&.dig(:data, :attributes)
  end
end
