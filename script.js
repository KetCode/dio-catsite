const changeBtn = document.getElementById('change-cat');

const getCats = async () => {
    try {
        const data = await fetch('https://api.thecatapi.com/v1/images/search');
        const json = await data.json();

        return json[0].url;
    } catch (error) {
        console.log(error.message);
    }
};

const loadImage = async () => {
    const catImg = document.getElementById('img-cat');

    catImg.src = await getCats();
};

changeBtn.addEventListener('click', loadImage);

loadImage();
