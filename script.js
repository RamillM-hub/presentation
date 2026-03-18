
// Countdown (установите нужную дату)
(function(){
const target = new Date('2026-06-21T14:00:00'); // дата и время свадьбы
const el = document.getElementById('countdown');
function update(){
    const now = new Date();
    let diff = Math.max(0, target - now);
    const days = Math.floor(diff/86400000); diff%=86400000;
    const hrs = Math.floor(diff/3600000); diff%=3600000;
    const mins = Math.floor(diff/60000); diff%=60000;
    const secs = Math.floor(diff/1000);
    el.textContent = `${days} дн ${hrs} ч ${mins} мин ${secs} сек`;
}
update(); setInterval(update,1000);
})();

// Простая обработка формы: показать сообщение после отправки
document.getElementById('rsvpForm').addEventListener('submit', function(e){
// если используете Formspree — форма отправится автоматически.
const msg = document.getElementById('formMsg');
msg.textContent = 'Спасибо! Ваш ответ отправлен.';
// можно не предотвращать submit, чтобы форма отправилась.
});
