const form = document.getElementById('registrationForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let valid = true;

    // Validate name
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    const namePattern = /^[a-zA-ZÀ-ỹà-ỹ\s]+$/;
    if (name.value.trim() === '' || name.value.length > 50 || !namePattern.test(name.value)) {
        valid = false;
        nameError.textContent = 'Vui lòng nhập họ và tên hợp lệ (tối đa 50 ký tự, chỉ chứa chữ cái và khoảng trắng). Vui lòng nhập lại.';
        nameError.style.display = 'block';
    } else {
        nameError.textContent = '';
        nameError.style.display = 'none';
    }

    // Validate email
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
        valid = false;
        emailError.textContent = 'Email không hợp lệ. Vui lòng nhập lại!';
        emailError.style.display = 'block';
    } else {
        emailError.textContent = '';
        emailError.style.display = 'none';
    }

    // Validate phone
    const phone = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');
    const phonePattern = /^0[3|5|7|8|9][0-9]{8}$/;
    if (!phonePattern.test(phone.value)) {
        valid = false;
        phoneError.textContent =  'Số điện thoại không hợp lệ. Vui lòng nhập lại!';
        phoneError.style.display = 'block';
    } else {
        phoneError.textContent = '';
        phoneError.style.display = 'none';
    }

    // Validate gender
    const genderError = document.getElementById('genderError');
    if (!document.querySelector('input[name="gender"]:checked')) {
        valid = false;
        genderError.textContent = 'Vui lòng chọn giới tính. Vui lòng nhập lại.';
        genderError.style.display = 'block';
    } else {
        genderError.textContent = '';
        genderError.style.display = 'none';
    }
    
    if (valid) {
        form.style.display = 'none';
        const container = document.querySelector('.container');
        const introText = document.getElementById('intro').value;
        container.innerHTML = `
            <h2>Thông tin đăng ký của bạn</h2>
            <p><strong>Họ và tên:</strong> ${name.value}</p>
            <p><strong>Email:</strong> ${email.value}</p>
            <p><strong>Số điện thoại:</strong> ${phone.value}</p>
            <p><strong>Giới tính:</strong> ${document.querySelector('input[name="gender"]:checked').value}</p>
            <p><strong>Sở thích:</strong> ${Array.from(document.querySelectorAll('input[name="hobbies"]:checked')).map(el => el.value).join(', ')}</p>
            <p><strong>Giới thiệu bản thân:</strong> ${introText}</p>
        `;
    }
});
