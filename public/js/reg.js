$(document).ready(function () {
        $('#regForm').submit(function(e) {
                e.preventDefault();
                var name = $('#username').val();
                var email = $('#email').val();
                var password = $('#password').val();
        
                if (!name || !email || !password) {
                        alert('Enter required field');
                        return;
                }
        
                var regObj = {
                        name,
                        email,
                        password
                }
        
                $.ajax({
                        url: 'http://localhost:4000/api/users',
                        type: 'POST',
                        data: regObj,
                        success: function () {
                                location.href = '/login';
                        },
                        error: function () {
                                alert('Unable to register');
                        }
                })
        })
})