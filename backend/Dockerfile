FROM ruby:3.3.9
ENV LANG C.UTF-8
ENV TZ Asia/Tokyo
RUN apt-get update -qq && apt-get install -y \
  build-essential \
  libpq-dev \
  nodejs
WORKDIR /app
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock

RUN gem install bundler:2.6.2
RUN bundle install

COPY . /app

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

CMD ["rails", "server", "-b", "0.0.0.0"]
