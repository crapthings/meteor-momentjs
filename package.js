Package.describe({
  summary: "A javascript date library for parsing, validating, manipulating, and formatting dates."
});

Package.on_use(function(api) {
  api.add_files(['moment/min/moment.min.js', 'moment/min/langs.min.js'], ['client', 'server']);
});
