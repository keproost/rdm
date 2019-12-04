//Tables
(function (window, document, $) {
  var tablegroups = $('#table-groups').DataTable({
    "searching": true,
    "lengthChange": true,
    "paging": true,
    "bInfo": true,
    "responsive": true,  
    'columnDefs': [
      { "orderable": false, "targets": [2, 4] },
      { "responsivePriority": 1, targets: 0 },
      { "responsivePriority": 2, targets: 1},   
      { "responsivePriority": 1, targets: -1},
      { "responsivePriority": 2, targets: 3},     
      { "responsivePriority": 20, targets: 2 },
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
        style: 'multi',
        selector: 'tr',
        blurable: true
    },
    'order': [[1, 'asc']]
  });
})(window, document, jQuery);
