document.querySelectorAll('[data-open-form]').forEach(btn => {
  btn.onclick = () => document.getElementById('formModal').style.display = 'block';
});
document.getElementById('closeModal').onclick = () =>
  document.getElementById('formModal').style.display = 'none';