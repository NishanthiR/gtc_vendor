$(document).ready(function() {
        $("#backBtn").click(function() {
            location.href = "/address";
        })
    
        $("#addressForm").submit(function(e) {
            e.preventDefault();
           var country_id = $("#country_id").val();
           var user_id = $("#user_id").val();
           var mobNumber = $("#mobNumber").val();
           var pin_code = $("#pin_code").val();
           var door_no = $("#door_no").val();
           var street = $("#street").val();
           var near_by = $("#near_by").val();
           var state_id = $("#state_id").val();
           var addressId = $('#addressId').val();
           
           if(!country_id || !user_id || !mobNumber || !pin_code || !door_no || !street || !near_by || !state_id ) {
            alert("Please enter required field");
            return;
           }
    
           var addressObj = {
            country_id, 
            user_id,
            mobNumber,
            pin_code,
            door_no,
            street,
            near_by,
            state_id
           }
    
           var url = '/api/address';
           var type = 'POST';
           var msg = 'Address saved successfully';
    
           if (addressId) {
              url = `/api/address/${addressId}`;
              type = 'PUT';
              msg = 'Address Updated successfully';
           }
    
           $.ajax({
            url: url,
            type: type,
            data: addressObj,
            success: function() {
                alert(msg);
                location.href = "/address";
            },
            error: function() {
                alert("Unable to save address");
            }
           })
        })
    })
    
    
    
    