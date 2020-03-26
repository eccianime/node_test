$(function() {

	$('#datemask1').val("").inputmask('yyyy/mm/dd', { 'placeholder': 'yyyy/mm/dd' });
	$('#datemask2').val("").inputmask('yyyy/mm/dd', { 'placeholder': 'yyyy/mm/dd' });

	$("#procuradatas").click(function() {
		var d1 = $('#datemask1').val();
		var d2 = $('#datemask2').val();

		if( new Date(d1) > new Date(d2) ){
			toastr.error('A primeira data deve ser maior quanto a segunda. Por favor, corrija.');
		}else if( d1 == "" || d2 == "" ){
			toastr.warning('Os campos de datas não deven ficar sem dados.');
		}else{
			$.ajax({
				type: "POST",
				url: "http://localhost:3000/clima",
				data: {
					data_i: d1,
					data_f: d2
				},
				success: function(data) {
					var charts = am4core.registry.baseSprites;
					charts[0].data = data.data;
				},
				error:function(data) {
					toastr.error(data.responseJSON.message);
				}
			});

		}

	})
});