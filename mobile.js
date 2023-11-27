
const menuBtns = document.querySelectorAll('.card-btn');
const foodItems = document.querySelectorAll('.food-item');

let activeBtn = "carne";

showFoodMenu(activeBtn);

menuBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (activeBtn === btn.id) {
      return; // Se o mesmo botão foi clicado, não faz nada
    }
    resetActiveBtn();
    showFoodMenu(btn.id);
    btn.classList.add('active-btn');
  });
});

function resetActiveBtn() {
  menuBtns.forEach((btn) => {
    btn.classList.remove('active-btn');
  });
}

function showFoodMenu(newMenuBtn) {
  activeBtn = newMenuBtn;
  foodItems.forEach((item) => {
    if (item.classList.contains(activeBtn)) {
      item.style.display = 'grid';
    } else {
      item.style.display = 'none';
    }
  });
}
