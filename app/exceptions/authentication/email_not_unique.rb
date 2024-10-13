module Authentication
  class EmailNotUnique < StandardError
    def initialize(msg = 'email not unique', exception_type = 'email_not_unique')
      @exception_type = exception_type
      super(msg)
    end
  end
end
