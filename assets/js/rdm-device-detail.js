
(function (window, document, $) {

  var devicedetailtablepolicies = $('#device-detail-table-policies').DataTable({
    'columnDefs': [
      { "orderable": false, "targets": [2, 3] }
    ],
    'order': [[1, 'asc']]
  });

  var devicedetailtablegroups = $('#device-detail-table-groups').DataTable({
    'columnDefs': [
      { "orderable": false, "targets": [2, 3] }
    ],
    'order': [[1, 'asc']]
  });



})(window, document, jQuery);
