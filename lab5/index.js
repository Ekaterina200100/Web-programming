document.addEventListener('DOMContentLoaded', () => { // Код внутри этого блока будет выполнен только после того, как структура документа будет полностью загружена и готова
  // Найти все контейнеры с паролями
  const passwordContainers = document.querySelectorAll('.sign_up_block__password-container'); // Методом querySelectorAll ищем всех элементы на странице с классом sign_up_block__password-container

  passwordContainers.forEach(container => { // Циклом forEach перебираем каждый найденный контейнер и выполняем код внутри цикла для каждого контейнера
    const passwordInput = container.querySelector('.password-input'); // Находим Поле ввода с классом password-input
    const togglePasswordButton = container.querySelector('.toggle-password'); // Находим Кнопка
    const togglePasswordIcon = togglePasswordButton.querySelector('i'); // Находим Иконку в кнопке

    togglePasswordButton.addEventListener('click', () => { // Когда кнопка нажимается, выполняется код внутри этого блока
      const isPassword = passwordInput.type === 'password';
      passwordInput.type = isPassword ? 'text' : 'password'; // Проверяем, является ли текущий тип поля ввода пароля 'password'
      //Если да, он меняет тип на 'text', чтобы пароль стал видимым
      //Если нет, он меняет тип на 'password', чтобы пароль стал невидимым

      // Переключение классов иконки
      togglePasswordIcon.classList.toggle('fa-eye'); // Есть ли у элемента togglePasswordIcon класс fa-eye. Если класс fa-eye уже присутствует, он будет удален и наоборот
      togglePasswordIcon.classList.toggle('fa-eye-slash');
    });
  });
});
