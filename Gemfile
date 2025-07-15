source "https://rubygems.org"

gem "github-pages", ">= 224", group: :jekyll_plugins
gem 'bootstrap', '~> 4.6.2', '>= 4.6.2.1'

group :jekyll_plugins do
  gem 'jekyll-sitemap', '>= 1.3.0'
  gem 'jekyll-feed', '>= 0.12.0'
  gem 'jekyll-seo-tag', '>= 2.6.0'
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data", ">= 1.2020.1"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?

