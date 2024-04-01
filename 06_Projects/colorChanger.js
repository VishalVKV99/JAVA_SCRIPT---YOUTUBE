const button = document.querySelectorAll('.button');
const body = document.querySelectorAll('body');

button.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (evt) {
    console.log(evt);
    const val = evt.target.id;

    switch (val) {
      case 'grey':
        document.body.style.backgroundColor = evt.target.id;

      case 'white':
        document.body.style.backgroundColor = evt.target.id;

      case 'blue':
        document.body.style.backgroundColor = evt.target.id;

      case 'yellow':
        document.body.style.backgroundColor = evt.target.id;

      case 'red':
        document.body.style.backgroundColor = evt.target.id;

        case 'purple':
        document.body.style.backgroundColor = evt.target.id;

    }
  });
});
