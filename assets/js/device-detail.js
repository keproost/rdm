
(function (window, document, $) {

  // table extended checkbox
  var tablecheckbox = $('#table-policies').DataTable({
    "searching": false,
    "lengthChange": false,
    "paging": false,
    "bInfo": false,
    "responsive": true,  
    'columnDefs': [
      { "orderable": false, "targets": [2] },
    'select': 'multi',
    'order': [[1, 'asc']]
  });

    // table extended checkbox
    var tablecheckbox = $('#table-groups').DataTable({
      "searching": false,
      "lengthChange": false,
      "paging": false,
      "bInfo": false,
      "responsive": true,  
      'columnDefs': [
        { "orderable": false, "targets": [2] },
      'select': 'multi',
      'order': [[1, 'asc']]
    });



})(window, document, jQuery);
