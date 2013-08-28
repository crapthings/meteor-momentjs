Package.describe({
  summary: "A javascript date library for parsing, validating, manipulating, and formatting dates."
});

Package.on_use(function(api, where) {
  where = where || ['client', 'server']
  if (api.export) api.export('moment');
  api.add_files(['moment/min/moment.min.js', 'moment/min/langs.min.js'], where);
});
