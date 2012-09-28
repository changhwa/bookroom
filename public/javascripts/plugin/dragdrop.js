$(function() {
		var table = $('.dragUnit');
		table.find('tbody tr td').bind('mousedown', function() {
				table.disableSelection();
		}).bind('mouseup', function() {
				table.enableSelection();
		}).draggable({
				helper: function(event) {
						return $('<div class="drag-mode table table-striped"><table id="dragTable"></table></div>')
								.find('table').append($(event.target).closest('tr').clone()).end().insertAfter(table);
				},
				cursor: 'move',
				distance: 5,
				delay: 100,
				revert: 'invalid'
		});

		$('#bookList').droppable({
			activeClass: 'active',
			hoverClass:'hover',
			tolerance: 'pointer',
			drop: function(event,ui){
				var items=$("#bookList table tbody tr:eq(0)").clone();
				var itemSize=$("bookList table tbody tr td").length;
				for (var i=0;i<itemSize;i++){
					items.find("td:eq("+i+")").text($("#dragTable td:eq("+i+")").text());
				}
				$("#bookList").append(items);
			}
		});
/*
		$('#bookList').droppable({
				activeClass: 'active',
				hoverClass: 'hover',
				tolerance: 'pointer',
				drop: function(event, ui) {
					var items = $("#bookList table tbody tr:eq(0)").clone();
					var itemSize = $("#bookList tbody tr td").length;
					for(var i=0; i<itemSize;i++){
						items.find("td:eq("+i+")").text($("#dragTable td:eq("+i+"	)").text());
					}
					("#bookList").append(items);
				}
		});​*/

});