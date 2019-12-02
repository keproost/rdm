//DATATABLE
(function (window, document, $) {
  var tabledevices = $('#table-devices').DataTable({
    "searching": true,
    "lengthChange": true,
    "paging": true,
    "bInfo": true,
    "responsive": true, 
    'columnDefs': [
      { 
        "orderable": false, 
        "targets": [6, 5], 
      },
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
      'select': {
        style: 'true',
        selector: 'tr',
        blurable: true
    },
    'order': [[1, 'asc']]
  });


})(window, document, jQuery);

