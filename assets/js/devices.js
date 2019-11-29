
(function (window, document, $) {

  // table extended checkbox
  var tablecheckbox = $('#table-devices').DataTable({
    "searching": false,
    "lengthChange": false,
    "paging": false,
    "bInfo": false,
    "responsive": true,  
    'columnDefs': [
      { "orderable": false, "targets": [6, 5] },
      {
        'targets': 0,
        'render': function (data, type, row, meta) {
          if (type === 'display') {
            data = '<div class="checkbox"><input type="checkbox" class="dt-checkboxes"><label></label></div>'; //body checkbox
          }
          return data;
        },
        'checkboxes': {
          'selectRow': true,
          'selectAllRender': '<div class="checkbox"><input type="checkbox" class="dt-checkboxes" checked=""><label></label></div >'  //head checkbox
        }
      }],
    'select': 'multi',
    'order': [[1, 'asc']]
  });



})(window, document, jQuery);
