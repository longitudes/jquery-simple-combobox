Package.describe({
  summary: "A jQuery combobox plugin. You can use it for autocomplete (search, etc)."
});

Package.on_use(function (api, where) {
  api.add_files('jquery.scombobox.min.js', 'client/js');
});
