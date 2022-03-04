//  Add user 
$(document).on('click', '#btn-add', function (e) {
	var data = $("#user_form").serialize();
	$.ajax({
		data: data,
		type: "post",
		url: "backend/save.php",
		success: function (dataResult) {
			var dataResult = JSON.parse(dataResult);
			if (dataResult.statusCode == 200) {
				$('#addEmployeeModal').modal('hide');
				alert('Data added successfully !');
				location.reload();
			}
			else if (dataResult.statusCode == 201) {
				alert(dataResult);
			}
		}
	});
});
$(document).on('click', '.update', function (e) {
	var id = $(this).attr("data-id");
	var name = $(this).attr("data-name");
	var email = $(this).attr("data-email");
	var phone = $(this).attr("data-phone");
	var city = $(this).attr("data-city");
	$('#id_u').val(id);
	$('#name_u').val(name);
	$('#email_u').val(email);
	$('#phone_u').val(phone);
	$('#city_u').val(city);
});
//  Update 
$(document).on('click', '#update', function (e) {
	var data = $("#update_form").serialize();
	console.log(data);
	$.ajax({
		data: data,
		type: "post",
		url: "backend/save.php",
		success: function (dataResult) {
			var dataResult = JSON.parse(dataResult);
			if (dataResult.statusCode == 200) {
				$('#editEmployeeModal').modal('hide');
				alert('Data updated successfully !');
				location.reload();
			}
			else if (dataResult.statusCode == 201) {
				alert(dataResult);
			}
		}
	});
});
$(document).on("click", ".delete", function () {
	var id = $(this).attr("data-id");
	$('#id_d').val(id);

});
$(document).on("click", "#delete", function () {
	$.ajax({
		url: "backend/save.php",
		type: "POST",
		cache: false,
		data: {
			type: 3,
			id: $("#id_d").val()
		},
		success: function (dataResult) {
			$('#deleteEmployeeModal').modal('hide');
			location.reload();
		}
	});
});
