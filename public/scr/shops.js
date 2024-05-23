document.addEventListener('DOMContentLoaded', async function () {
  const response = await fetch('http://localhost:8080/shop');
  const shops = await response.json();

  const TheLeakyCauldron = document.querySelector('#TheLeakyCauldron');
  if (TheLeakyCauldron) {
    TheLeakyCauldron.innerHTML = `
        <section class="shop">
            <h3>${shops[0].name}</h3>
            <img src="img/TheLeakyCauldron.avif" height="500">
            <p>${shops[0].about}</p>
            <button>Посетить</button>
        </section>
  `;
  }

  const Ollivanders = document.querySelector('#Ollivanders');
  if (Ollivanders) {
    Ollivanders.innerHTML = `
        <section class="shop">
            <h3>${shops[1].name}</h3>
            <img src="img/Ollivanders.jpg" height="500">
            <p>${shops[1].about}</p>
            <button>Посетить</button>
        </section>
  `;
  }

  const Gringotts = document.querySelector('#Gringotts');
  if (Gringotts){
    Gringotts.innerHTML = `
        <section class="shop">
            <h3>${shops[2].name}</h3>
            <img src="img/gringotts.png.webp" height="500">
            <p>${shops[2].about}</p>
            <button>Посетить</button>
        </section>
  `;
  }

  const WizardWheezes = document.querySelector('#WizardWheezes');
  if(WizardWheezes) {
    WizardWheezes.innerHTML = `
        <section class="shop">
            <h3>${shops[3].name}</h3>
            <img src="img/Weasley'sWizardWheezes.avif" height="500">
            <p>${shops[3].about}</p>
            <button>Посетить</button>
        </section>
  `;
  }

  const OwlEmporium = document.querySelector('#OwlEmporium');
  if(OwlEmporium) {
    OwlEmporium.innerHTML = `
        <section class="shop">
            <h3>${shops[4].name}</h3>
            <img src="img/Eeylop'sOwlEmporium.jpg" height="500">
            <p>${shops[4].about}</p>
            <button>Посетить</button>
        </section>
  `;
  }

  const FlourishandBlotts = document.querySelector('#FlourishandBlotts');
  if(FlourishandBlotts) {
    FlourishandBlotts.innerHTML = `
        <section class="shop">
            <h3>${shops[5].name}</h3>
            <img src="img/Flourish_&_Blotts.jpg" height="500">
            <p>${shops[5].about}</p>
            <button onclick = "window.location.href = 'flourishandBlotts'"> Посетить </button>
        </section>
  `;
  }

  const QualityQuidditchSupplies = document.querySelector('#QualityQuidditchSupplies');
  if(QualityQuidditchSupplies){
    QualityQuidditchSupplies.innerHTML = `
        <section class="shop">
            <h3>${shops[6].name}</h3>
            <img src="img/QualityQuidditchSupplies.avif" height="500">
            <p>${shops[6].about}</p>
            <button>Посетить</button>
        </section>
  `;
  }

  const Malkins = document.querySelector('#Malkins');
  if(Malkins) {
    Malkins.innerHTML = `
        <section class="shop">
            <h3>${shops[7].name}</h3>
            <img src="img/Malkins.jpg" height="500">
            <p>${shops[7].about}</p>
            <button>Посетить</button>
        </section>
  `;
  }

  const TheMagicalMenagerie = document.querySelector('#TheMagicalMenagerie');
  if(TheMagicalMenagerie) {
    TheMagicalMenagerie.innerHTML = `
        <section class="shop">
            <h3>${shops[8].name}</h3>
            <img src="img/TheMagicalMenagerie.avif" height="500">
            <p>${shops[8].about}</p>
            <button>Посетить</button>
        </section>
  `;
  }
});