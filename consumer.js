const url = "data.json";
const container = document.querySelector('.container');
// const divir = document.querySelector('.container1');
// const divir1 = document.querySelector('.container2');
// const divir2 = document.querySelector('.container3');
// const divir3 = document.querySelector('.container4');
// const divir4 = document.querySelector('.container5');
const appGet = fetch(url);

appGet
    .then(response => response.json())
    .then((data) => {
        data.map(data => {
            console.log(data);
            const div = document.createElement('div');
            div.classList.add('card')
            div.innerHTML = `
            <div class="card-l"></div>
            <div class="icon" style="background-image: url(${data.logo})"></div>
            <div class="container-information">
                <div class="information">

                    <div class="item-sup">
                        <div class="name">${data.company}</div>
                        ${data.new ? '<div class="new">NEW!</div>' : ''}
                        ${data.featured ? '<div class="featured">FEATURED</div>' : ''}
                    </div>

                    <div class="item-med">
                        <label> ${data.position} </label>
                    </div>

                    <div class="item-inf">
                        <label>${data.postedAt}</label>
                        <div class="point"></div>
                        <label>${data.contract}</label>
                        <div class="point"></div>
                        <label>${data.location}</label>
                    </div>
                    
                </div>
                <div class="skills">
                    ${data.languages.map( item => `<div class="skill">${item}</div>`).join('')}
                </div>
            </div>`;
            container.appendChild(div);
        });
    })